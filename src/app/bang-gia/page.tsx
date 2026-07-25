import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { pricingPlans, formatPrice } from '@/lib/data/pricing'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABanner from '@/components/home/CTABanner'
import FAQSection from '@/components/home/FAQSection'

export const metadata: Metadata = {
  title: 'Bảng giá — Minh bạch, không phụ phí ẩn',
  description: 'Posso có 3 gói: Miễn phí mãi mãi, Cơ bản 199.000đ/tháng, Pro 499.000đ/tháng. Dùng thử 14 ngày miễn phí, hủy bất cứ lúc nào.',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-hero section">
        <div className="container-content">
          <SectionHeader
            badge="Bảng giá"
            title="Giá minh bạch, không phụ phí ẩn"
            subtitle="Không thu phí theo chi nhánh, không tính phí nhân viên. Bạn biết mình trả bao nhiêu từ ngày đầu."
          />
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 border-2 flex flex-col relative ${
                  plan.highlighted
                    ? 'border-primary-600 shadow-2xl'
                    : 'border-slate-100 bg-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h2>
                  <p className="text-sm text-slate-500">{plan.tagline}</p>
                </div>

                <div className="mb-2">
                  <span className="text-4xl font-bold font-display text-slate-900">
                    {formatPrice(plan.price.monthly)}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-slate-400 text-sm ml-1">/tháng</span>
                  )}
                </div>
                {plan.price.monthly > 0 && (
                  <p className="text-xs text-green-600 font-medium mb-6">
                    Hoặc {formatPrice(plan.price.yearly)}/tháng khi thanh toán năm (tiết kiệm 20%)
                  </p>
                )}
                {plan.price.monthly === 0 && <div className="mb-6" />}

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={15} className="text-slate-200 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? (f.highlight ? 'text-slate-900 font-medium' : 'text-slate-700') : 'text-slate-300'}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`btn w-full justify-center btn-lg ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              ✅ Dùng thử 14 ngày miễn phí · Hủy bất cứ lúc nào · Hoàn tiền 30 ngày nếu không hài lòng
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </>
  )
}
