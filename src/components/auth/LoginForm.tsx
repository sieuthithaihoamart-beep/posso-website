'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, LayoutDashboard, ShoppingCart } from 'lucide-react'

type Mode = 'admin' | 'cashier'

export default function LoginForm() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<Mode>('admin')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!phone || !password) { setError('Vui lòng nhập đầy đủ thông tin'); return }
    setLoading(true)
    // TODO: call auth API
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setError('Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại.')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Mode selector */}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Đăng nhập với vai trò</p>
        <div className="grid grid-cols-2 gap-2">
          {(['admin', 'cashier'] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                mode === m
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-slate-200 text-slate-500 hover:border-slate-300'
              }`}
            >
              {m === 'admin' ? <LayoutDashboard size={15} /> : <ShoppingCart size={15} />}
              {m === 'admin' ? 'Quản lý' : 'Bán hàng'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
        <input
          className="input"
          placeholder="0901 234 567"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoFocus
        />
      </div>

      <div>
        <div className="flex justify-between mb-1.5">
          <label className="text-sm font-medium text-slate-700">Mật khẩu</label>
          <a href="#" className="text-xs text-primary-600 hover:underline">Quên mật khẩu?</a>
        </div>
        <input
          className="input"
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full justify-center btn-lg" disabled={loading}>
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Đang đăng nhập...</>
        ) : (
          <>Đăng nhập <ArrowRight size={16} /></>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Bằng cách đăng nhập, bạn đồng ý với{' '}
        <a href="/chinh-sach/dieu-khoan" className="underline hover:text-primary-600">Điều khoản sử dụng</a>
        {' '}và{' '}
        <a href="/chinh-sach/bao-mat" className="underline hover:text-primary-600">Chính sách bảo mật</a>.
      </p>
    </form>
  )
}
