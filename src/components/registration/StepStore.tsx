'use client'

import { useState } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import type { StoreInfo } from '@/types'

interface Props {
  onSubmit: (data: StoreInfo) => void
  onBack: () => void
  loading?: boolean
  submitError?: string
  defaultValues?: Partial<StoreInfo>
}

export default function StepStore({ onSubmit, onBack, loading, submitError, defaultValues }: Props) {
  const [form, setForm] = useState<StoreInfo>({
    storeName: defaultValues?.storeName || '',
  })
  const [errors, setErrors] = useState<Partial<StoreInfo>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const e2: Partial<StoreInfo> = {}
    if (!form.storeName.trim()) e2.storeName = 'Vui lòng nhập tên cửa hàng'
    setErrors(e2)
    if (Object.keys(e2).length === 0) onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold font-display text-slate-900 mb-1">Thông tin cửa hàng</h2>
        <p className="text-sm text-slate-500">Đặt tên cho cửa hàng mới của bạn.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên cửa hàng</label>
        <input
          className="input"
          placeholder="Ví dụ: Tạp hóa Minh Anh"
          autoComplete="organization"
          value={form.storeName}
          onChange={(e) => setForm({ ...form, storeName: e.target.value })}
        />
        {errors.storeName && <p className="mt-1 text-xs text-red-500">{errors.storeName}</p>}
      </div>

      <p className="text-xs text-slate-400">
        Địa chỉ truy cập sẽ được hệ thống tự động tạo từ tên cửa hàng.
      </p>

      {submitError && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600"
        >
          {submitError}
        </div>
      )}

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className="btn btn-secondary flex-1 justify-center" disabled={loading}>
          <ArrowLeft size={16} />
          Quay lại
        </button>
        <button type="submit" className="btn btn-primary flex-1 justify-center" disabled={loading}>
          {loading ? (
            <><Loader2 size={16} className="animate-spin" /> Đang tạo...</>
          ) : (
            'Tạo cửa hàng 🎉'
          )}
        </button>
      </div>
    </form>
  )
}
