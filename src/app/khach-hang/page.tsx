import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { testimonials } from '@/lib/data/testimonials'
import { Star } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  path: '/khach-hang',
  title: 'Khách hàng tiêu biểu | Posso',
  description: 'Hàng trăm cửa hàng Việt Nam đã tin tưởng Posso để quản lý kinh doanh hiệu quả hơn.',
})

const STATS = [
  { value: '500+', label: 'Cửa hàng đang dùng' },
  { value: '45+', label: 'Tỉnh thành' },
  { value: '4.9★', label: 'Đánh giá trung bình' },
  { value: '98%', label: 'Hài lòng sau 3 tháng' },
]

export default function CustomersPage() {
  return (
    <main>
      <section className="section bg-hero">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">
            Được <span className="text-gradient">tin tưởng</span> bởi<br />hàng trăm cửa hàng
          </h1>
          <p className="text-lg text-black">Từ tạp hóa nhỏ ở thôn quê đến chuỗi cửa hàng thời trang tại thành phố — Posso phục vụ mọi quy mô.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-slate-100">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold font-display text-primary-600 mb-1">{s.value}</div>
                <div className="text-sm text-black">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-content">
          <SectionHeader badge="Đánh giá" title="Họ nói gì về Posso?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-black text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                  <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.author}</p>
                    <p className="text-xs text-black">{t.role} · {t.store}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-4">Bạn sẽ là người tiếp theo?</h2>
          <p className="text-primary-200 mb-8">Đăng ký miễn phí hôm nay, tạo cửa hàng trong 2 phút.</p>
          <Link href="/dang-ky" className="btn btn-outline btn-lg">
            Tạo cửa hàng miễn phí
          </Link>
        </div>
      </section>
    </main>
  )
}
