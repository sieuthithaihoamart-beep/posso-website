import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/lib/data/industries'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Phần mềm quản lý bán hàng cho 26 ngành',
  description: 'Posso hỗ trợ 26 ngành bán lẻ tại Việt Nam. Tạp hóa, thời trang, cafe, nhà hàng, spa, phòng khám và nhiều hơn nữa — mỗi ngành có giải pháp riêng.',
}

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-hero section">
        <div className="container-content">
          <SectionHeader
            badge="26 ngành hàng"
            title="Giải pháp riêng cho từng ngành"
            subtitle="Posso không phải phần mềm một-cho-tất-cả. Mỗi ngành có tính năng, giao diện và quy trình làm việc phù hợp với đặc thù riêng."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/nganh-hang/${industry.slug}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-primary-200 hover:shadow-md transition-all duration-200 no-underline"
              >
                <div className={`w-12 h-12 rounded-xl ${industry.bgClass} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {industry.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-slate-900 group-hover:text-primary-600 transition-colors mb-1 ${industry.colorClass}`}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-black leading-relaxed line-clamp-2">
                    {industry.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
