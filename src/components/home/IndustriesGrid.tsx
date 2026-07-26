import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { industries } from '@/lib/data/industries'

interface Props {
  limit?: number
  showViewAll?: boolean
}

export default function IndustriesGrid({ limit = 12, showViewAll = true }: Props) {
  const displayed = industries.slice(0, limit)

  return (
    <section className="section bg-slate-50">
      <div className="container-content">
        <SectionHeader
          badge="26 ngành hàng"
          title="Phù hợp với mọi loại cửa hàng"
          subtitle="Từ tạp hóa đến spa, từ nhà hàng đến phòng khám — Posso được thiết kế riêng cho đặc thù từng ngành."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayed.map((industry) => (
            <Link
              key={industry.slug}
              href={`/nganh-hang/${industry.slug}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 no-underline text-center"
            >
              <span className="text-3xl">{industry.emoji}</span>
              <span className="text-xs font-medium text-black group-hover:text-primary-600 transition-colors leading-tight">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center">
            <Link href="/nganh-hang" className="btn btn-secondary">
              Xem tất cả 26 ngành
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
