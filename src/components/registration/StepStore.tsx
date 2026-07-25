'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import type { StoreInfo } from '@/types'
import { isValidSlug, slugify, RESERVED_SLUGS } from '@/lib/utils'

const PROVINCES = [
  'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng',
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu',
  'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước',
  'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông',
  'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang',
  'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hậu Giang', 'Hòa Bình',
  'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu',
  'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định',
  'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên',
  'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị',
  'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên',
  'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang',
  'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái',
]

interface Props {
  onSubmit: (data: StoreInfo) => void
  onBack: () => void
  loading?: boolean
  industrySlug: string
  defaultValues?: Partial<StoreInfo>
}

export default function StepStore({ onSubmit, onBack, loading, industrySlug, defaultValues }: Props) {
  const [form, setForm] = useState<StoreInfo>({
    storeName: defaultValues?.storeName || '',
    storeSlug: defaultValues?.storeSlug || '',
    province: defaultValues?.province || '',
  })
  const [slugEdited, setSlugEdited] = useState(false)
  const [slugError, setSlugError] = useState('')
  const [errors, setErrors] = useState<Partial<StoreInfo>>({})

  // Auto-generate slug from store name
  useEffect(() => {
    if (!slugEdited && form.storeName) {
      setForm((prev) => ({ ...prev, storeSlug: slugify(form.storeName) }))
    }
  }, [form.storeName, slugEdited])

  const validateSlug = (slug: string) => {
    if (!slug) return 'Vui lòng nhập tên miền cửa hàng'
    if (RESERVED_SLUGS.has(slug)) return `"${slug}" là tên đặt trước, vui lòng chọn tên khác`
    if (!isValidSlug(slug)) return 'Chỉ dùng chữ thường (a-z), số (0-9), dấu gạch ngang. Từ 3–30 ký tự.'
    return ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const e2: Partial<StoreInfo> = {}
    if (!form.storeName.trim()) e2.storeName = 'Vui lòng nhập tên cửa hàng'
    const slugErr = validateSlug(form.storeSlug)
    if (slugErr) e2.storeSlug = slugErr
    if (!form.province) e2.province = 'Vui lòng chọn tỉnh thành'
    setErrors(e2)
    if (Object.keys(e2).length === 0) onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold font-display text-slate-900 mb-1">Thông tin cửa hàng</h2>
        <p className="text-sm text-slate-500">Đặt tên cửa hàng và tạo địa chỉ truy cập riêng.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên cửa hàng</label>
        <input
          className="input"
          placeholder="Ví dụ: Tạp hóa Minh Anh"
          value={form.storeName}
          onChange={(e) => setForm({ ...form, storeName: e.target.value })}
        />
        {errors.storeName && <p className="mt-1 text-xs text-red-500">{errors.storeName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Địa chỉ truy cập</label>
        <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 bg-white transition-all">
          <input
            className="flex-1 px-4 py-2.5 text-sm text-slate-800 bg-transparent outline-none"
            placeholder="tencuahang"
            value={form.storeSlug}
            onChange={(e) => {
              setSlugEdited(true)
              const val = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
              setForm({ ...form, storeSlug: val })
              setSlugError(validateSlug(val))
            }}
          />
          <span className="px-3 py-2.5 bg-slate-50 text-slate-400 text-sm border-l border-slate-200 whitespace-nowrap">
            .posso.vn
          </span>
        </div>
        {form.storeSlug && !slugError && (
          <p className="mt-1 text-xs text-green-600">✓ {form.storeSlug}.posso.vn</p>
        )}
        {(slugError || errors.storeSlug) && (
          <p className="mt-1 text-xs text-red-500">{slugError || errors.storeSlug}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tỉnh / Thành phố</label>
        <select
          className="input"
          value={form.province}
          onChange={(e) => setForm({ ...form, province: e.target.value })}
        >
          <option value="">-- Chọn tỉnh thành --</option>
          {PROVINCES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.province && <p className="mt-1 text-xs text-red-500">{errors.province}</p>}
      </div>

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
