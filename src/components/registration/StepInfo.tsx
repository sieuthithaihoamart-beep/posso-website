'use client'

import { useState } from 'react'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import type { PersonalInfo } from '@/types'

interface Props {
  onNext: (data: PersonalInfo) => void
  defaultValues?: Partial<PersonalInfo>
}

export default function StepInfo({ onNext, defaultValues }: Props) {
  const [form, setForm] = useState<PersonalInfo>({
    fullName: defaultValues?.fullName || '',
    username: defaultValues?.username?.toUpperCase() || '',
    password: '',
    phone: defaultValues?.phone || '',
    email: defaultValues?.email || '',
  })
  const [errors, setErrors] = useState<Partial<PersonalInfo>>({})
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const e: Partial<PersonalInfo> = {}
    if (!form.fullName.trim()) e.fullName = 'Vui lòng nhập họ tên'
    if (form.username.trim().length < 4) e.username = 'Tên đăng nhập cần ít nhất 4 ký tự'
    if (form.password.length < 6) e.password = 'Mật khẩu cần ít nhất 6 ký tự'
    const normalizedPhone = form.phone.replace(/\s/g, '')
    if (!normalizedPhone) {
      e.phone = 'Vui lòng nhập số điện thoại'
    } else if (!/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(normalizedPhone)) {
      e.phone = 'Số điện thoại không hợp lệ'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email không hợp lệ'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) onNext(form)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold font-display text-slate-900 mb-1">Thông tin của bạn</h2>
        <p className="text-sm text-black">Chúng tôi cần một vài thông tin để tạo tài khoản.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Họ và tên</label>
        <input
          className="input"
          placeholder="Nguyễn Văn A"
          autoComplete="name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên đăng nhập</label>
        <input
          className="input"
          placeholder="MINHANH_ADMIN"
          autoComplete="username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value.toUpperCase() })}
        />
        {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
        <p className="mt-1 text-xs text-slate-400">Tối thiểu 4 ký tự</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Mật khẩu</label>
        <div className="relative">
          <input
            className="input pr-12"
            placeholder="Tối thiểu 6 ký tự"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
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
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
        <input
          className="input"
          placeholder="0901 234 567"
          type="tel"
          autoComplete="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email <span className="text-slate-400 font-normal">(tuỳ chọn)</span></label>
        <input
          className="input"
          placeholder="email@example.com"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <button type="submit" className="btn btn-primary w-full justify-center btn-lg mt-2">
        Tiếp theo
        <ArrowRight size={18} />
      </button>
    </form>
  )
}
