import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { features } from '@/lib/data/features'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Tính năng — Tất cả những gì cửa hàng cần',
  description: 'Posso có đầy đủ tính năng để vận hành cửa hàng: bán hàng POS, quản lý kho, báo cáo doanh thu, quản lý khách hàng, nhân viên và nhiều hơn nữa.',
}

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-hero section">
        <div className="container-content">
          <SectionHeader
            badge="Tính năng"
            title="Mọi thứ bạn cần, không thứ bạn không cần"
            subtitle="Posso tập trung vào những tính năng thật sự giúp cửa hàng vận hành tốt hơn. Không cồng kềnh, không phức tạp."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <div className="flex flex-col gap-16">
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-3xl mb-5">
                    {feature.emoji}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">{feature.name}</h2>
                  <p className="text-black leading-relaxed mb-6">{feature.description}</p>
                  <ul className="flex flex-col gap-2.5">
                    {feature.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-black">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className={`bg-gradient-to-br from-primary-50 to-sky-50 rounded-2xl h-64 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-7xl">{feature.emoji}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
