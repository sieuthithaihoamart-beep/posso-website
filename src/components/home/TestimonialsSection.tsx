import SectionHeader from '@/components/shared/SectionHeader'
import { testimonials } from '@/lib/data/testimonials'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-content">
        <SectionHeader
          badge="Khách hàng nói gì"
          title="Được tin dùng bởi hàng nghìn cửa hàng"
          subtitle="Từ tạp hóa nhỏ đến chuỗi cửa hàng — chủ cửa hàng trên khắp Việt Nam đang dùng Posso mỗi ngày."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="card p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm flex-shrink-0">
                  {t.author.charAt(t.author.lastIndexOf(' ') + 1)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-400">{t.store}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
