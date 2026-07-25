'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { PersonalInfo } from '@/types'

interface Props {
  onNext: (data: PersonalInfo) => void
  defaultValues?: Partial<PersonalInfo>
}

export default function StepInfo({ onNext, defaultValues }: Props) {
  const [form, setForm] = useState<PersonalInfo>({
    fullName: defaultValues?.fullName || '',
    phone: defaultValues?.phone || '',
    email: defaultValues?.email || '',
  })
  const [errors, setErrors] = useState<Partial<PersonalInfo>>({})

  const validate = () => {
    const e: Partial<PersonalInfo> = {}
    if (!form.fullName.trim() || form.fullName.length < 2) e.fullName = 'Vui lòng nhập họ tên (ít nhất 2 ký tự)'
    if (!/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Số điện thoại không hợp lệ'
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
        <p className="text-sm text-slate-500">Chúng tôi cần một vài thông tin để tạo tài khoản.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Họ và tên</label>
        <input
          className="input"
          placeholder="Nguyễn Văn A"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
        <input
          className="input"
          placeholder="0901 234 567"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        <p className="mt-1 text-xs text-slate-400">Dùng để đăng nhập vào cửa hàng</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email <span className="text-slate-400 font-normal">(tuỳ chọn)</span></label>
        <input
          className="input"
          placeholder="email@example.com"
          type="email"
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
