import SectionHeader from '@/components/shared/SectionHeader'
import { features } from '@/lib/data/features'

export default function FeaturesGrid() {
  return (
    <section id="features" className="section bg-white">
      <div className="container-content">
        <SectionHeader
          badge="Tính năng"
          title="Mọi thứ bạn cần để bán hàng tốt hơn"
          subtitle="Không cần nhiều phần mềm khác nhau. Posso có đủ tất cả những gì một cửa hàng cần để vận hành trơn tru."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl mb-4">
                {feature.emoji}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
