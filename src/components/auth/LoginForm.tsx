'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react'
import { getStoresByUsername, login } from '@/lib/api/auth'
import type { AuthStore } from '@/types'

const USERNAME_MIN_LENGTH = 4
const USERNAME_MAX_LENGTH = 100

function getDashboardSlug(storeSlug: string): string {
  const slugWithoutSuffix = storeSlug.replace(/-[^-]+$/, '')
  const dashboardSlug = slugWithoutSuffix || storeSlug

  if (
    dashboardSlug.length > 63 ||
    !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(dashboardSlug)
  ) {
    throw new Error('Subdomain cửa hàng không hợp lệ.')
  }

  return dashboardSlug
}

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [stores, setStores] = useState<AuthStore[]>([])
  const [selectedStoreSlug, setSelectedStoreSlug] = useState('')
  const [loadingStores, setLoadingStores] = useState(false)
  const [storeError, setStoreError] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const normalizedUsername = username.trim()

    if (
      normalizedUsername.length < USERNAME_MIN_LENGTH ||
      normalizedUsername.length > USERNAME_MAX_LENGTH
    ) return

    const controller = new AbortController()

    const debounceTimer = window.setTimeout(async () => {
      try {
        const matchedStores = await getStoresByUsername(
          normalizedUsername,
          controller.signal,
        )

        setStores(matchedStores)
        setSelectedStoreSlug(matchedStores[0]?.slug || '')
      } catch (lookupError) {
        if (lookupError instanceof DOMException && lookupError.name === 'AbortError') {
          return
        }

        setStoreError(
          lookupError instanceof Error
            ? lookupError.message
            : 'Không thể tải danh sách cửa hàng.',
        )
      } finally {
        if (!controller.signal.aborted) setLoadingStores(false)
      }
    }, 500)

    return () => {
      window.clearTimeout(debounceTimer)
      controller.abort()
    }
  }, [username])

  const handleUsernameChange = (value: string) => {
    const nextUsername = value.toUpperCase()
    const usernameLength = nextUsername.trim().length

    setUsername(nextUsername)
    setStores([])
    setSelectedStoreSlug('')
    setStoreError(
      usernameLength > USERNAME_MAX_LENGTH
        ? 'Username phải có từ 4 đến 100 ký tự'
        : '',
    )
    setLoadingStores(
      usernameLength >= USERNAME_MIN_LENGTH &&
      usernameLength <= USERNAME_MAX_LENGTH,
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading || loadingStores) return

    setError('')

    const normalizedUsername = username.trim().toUpperCase()
    if (
      normalizedUsername.length < USERNAME_MIN_LENGTH ||
      normalizedUsername.length > USERNAME_MAX_LENGTH
    ) {
      setError('Username phải có từ 4 đến 100 ký tự')
      return
    }

    if (!password) {
      setError('Vui lòng nhập mật khẩu')
      return
    }

    if (stores.length > 0 && !selectedStoreSlug) {
      setError('Vui lòng chọn cửa hàng')
      return
    }

    setLoading(true)

    try {
      const result = await login({
        username: normalizedUsername,
        password,
        storeSlug: selectedStoreSlug || undefined,
      })

      localStorage.setItem('accessToken', result.data.token)
      localStorage.setItem('authUser', JSON.stringify(result.data.user))

      const dashboardSlug = getDashboardSlug(result.data.user.storeSlug)
      window.location.assign(`https://${dashboardSlug}.posso.vn/dashboard`)
    } catch (loginError) {
      setError(
        loginError instanceof Error
          ? loginError.message
          : 'Đăng nhập không thành công. Vui lòng thử lại.',
      )
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Tên đăng nhập
        </label>
        <input
          className="input"
          placeholder="MINHANH_ADMIN"
          autoComplete="username"
          value={username}
          onChange={(e) => handleUsernameChange(e.target.value)}
          autoFocus
          required
        />
        {loadingStores && (
          <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
            <Loader2 size={12} className="animate-spin" />
            Đang tìm cửa hàng...
          </p>
        )}
        {storeError && <p className="mt-1 text-xs text-red-500">{storeError}</p>}
      </div>

      {stores.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Cửa hàng
          </label>
          <select
            className="input"
            value={selectedStoreSlug}
            onChange={(e) => setSelectedStoreSlug(e.target.value)}
            required
          >
            {stores.map((store) => (
              <option key={store.id} value={store.slug}>
                {store.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <div className="flex justify-between mb-1.5">
          <label className="text-sm font-medium text-slate-700">Mật khẩu</label>
          <a href="#" className="text-xs text-primary-600 hover:underline">
            Quên mật khẩu?
          </a>
        </div>
        <div className="relative">
          <input
            className="input pr-12"
            placeholder="••••••••"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition-colors hover:text-slate-600"
            aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
            aria-pressed={showPassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {error && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full justify-center btn-lg"
        disabled={loading || loadingStores}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Đang đăng nhập...
          </>
        ) : (
          <>
            Đăng nhập <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Bằng cách đăng nhập, bạn đồng ý với{' '}
        <a href="/chinh-sach/dieu-khoan" className="underline hover:text-primary-600">
          Điều khoản sử dụng
        </a>{' '}
        và{' '}
        <a href="/chinh-sach/bao-mat" className="underline hover:text-primary-600">
          Chính sách bảo mật
        </a>
        .
      </p>
    </form>
  )
}
