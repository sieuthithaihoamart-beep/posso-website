import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { pricingPlans, formatPrice } from '@/lib/data/pricing'

export default function PricingPreview() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <SectionHeader
          badge="Bảng giá"
          title="Giá minh bạch, không phụ phí ẩn"
          subtitle="Chọn gói phù hợp với quy mô cửa hàng. Nâng cấp hoặc hủy bất cứ lúc nào, không bị ràng buộc."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 border-2 transition-all duration-200 flex flex-col ${
                plan.highlighted
                  ? 'border-primary-600 shadow-xl relative'
                  : 'border-slate-100 bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold font-display text-slate-900">
                  {formatPrice(plan.price.monthly)}
                </span>
                {plan.price.monthly > 0 && (
                  <span className="text-slate-400 text-sm ml-1">/tháng</span>
                )}
              </div>

              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {plan.features.slice(0, 6).map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={f.included ? 'text-green-500 flex-shrink-0' : 'text-slate-200 flex-shrink-0'}
                    />
                    <span className={f.included ? 'text-slate-700' : 'text-slate-300 line-through'}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`btn w-full justify-center ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/bang-gia" className="text-sm text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-1 no-underline">
            So sánh đầy đủ tính năng các gói
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
