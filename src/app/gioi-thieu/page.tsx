import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import SectionHeader from '@/components/shared/SectionHeader'

export const metadata: Metadata = buildMetadata({
  path: '/gioi-thieu',
  title: 'Về Posso | Phần mềm quản lý bán hàng cho người Việt',
  description: 'Posso được xây dựng bởi đội ngũ người Việt, dành riêng cho cửa hàng Việt. Tìm hiểu câu chuyện và sứ mệnh của chúng tôi.',
})

const MILESTONES = [
  { year: '2023', title: 'Thành lập', desc: 'Ra đời từ nỗi đau thực tế khi vận hành chuỗi cửa hàng mà không có phần mềm phù hợp.' },
  { year: '2024', title: 'Ra mắt Beta', desc: 'Phiên bản thử nghiệm với 50 cửa hàng đầu tiên trên 5 tỉnh thành.' },
  { year: '2025', title: 'Mở rộng', desc: 'Phục vụ hơn 500 cửa hàng trên toàn quốc, hỗ trợ 26 ngành kinh doanh.' },
  { year: '2026', title: 'Posso SaaS', desc: 'Ra mắt nền tảng đám mây hoàn toàn — mỗi cửa hàng có tên miền riêng tại posso.vn.' },
]

const VALUES = [
  { emoji: '🇻🇳', title: 'Made in Vietnam', desc: 'Giao diện, ngôn ngữ, quy trình — tất cả thiết kế theo nghiệp vụ thực tế của người Việt.' },
  { emoji: '⚡', title: 'Nhanh & Đơn giản', desc: 'Thu ngân mới học trong 15 phút. Mỗi tính năng giải quyết đúng một vấn đề.' },
  { emoji: '🔒', title: 'Bảo mật dữ liệu', desc: 'Dữ liệu được mã hóa, lưu trữ tại Việt Nam, sao lưu tự động hàng ngày.' },
  { emoji: '🤝', title: 'Đồng hành lâu dài', desc: 'Không giới hạn thời gian dùng thử miễn phí. Hỗ trợ 24/7 qua hotline và Zalo.' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section bg-hero">
        <div className="container-content text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-primary-100">
            🌿 Vietnamese Treasures &amp; Produce
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight">
            Phần mềm bán hàng<br />
            <span className="text-gradient">cho người Việt</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Posso ra đời từ những cửa hàng thực tế — nơi mà mỗi đơn hàng cần xử lý nhanh,
            mỗi báo cáo cần dễ đọc, và mỗi đồng doanh thu cần được theo dõi chính xác.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-600 font-semibold text-sm mb-3">Sứ mệnh</p>
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">
                Giúp mỗi cửa hàng Việt vận hành chuyên nghiệp hơn
              </h2>
              <div className="flex flex-col gap-4 text-slate-600 leading-relaxed">
                <p>
                  Hàng triệu cửa hàng nhỏ và vừa tại Việt Nam vẫn đang ghi chép bằng tay, dùng Excel, hoặc
                  phần mềm nước ngoài không phù hợp với nghiệp vụ địa phương.
                </p>
                <p>
                  Posso được xây dựng để thay đổi điều đó — một nền tảng nhẹ nhàng, dễ dùng, hiểu đúng
                  cách người Việt vận hành kinh doanh.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Cửa hàng đang dùng', value: '500+' },
                { label: 'Tỉnh thành', value: '45+' },
                { label: 'Ngành kinh doanh', value: '26' },
                { label: 'Uptime hệ thống', value: '99.9%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                  <div className="text-3xl font-bold font-display text-primary-700 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container-content">
          <SectionHeader
            badge="Giá trị cốt lõi"
            title="Những điều chúng tôi cam kết"
            subtitle="Mỗi quyết định sản phẩm đều được đặt câu hỏi: Điều này có giúp cửa hàng bán hàng dễ hơn không?"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-bold font-display text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-content max-w-3xl mx-auto">
          <SectionHeader
            badge="Hành trình"
            title="Từ ý tưởng đến hiện thực"
          />
          <div className="mt-12 flex flex-col gap-0">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 h-full bg-primary-100 mt-2" />}
                </div>
                <div className="pb-10">
                  <p className="text-xs text-primary-600 font-semibold mb-1">{m.year}</p>
                  <h3 className="font-bold font-display text-slate-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Sẵn sàng bắt đầu chưa?
          </h2>
          <p className="text-primary-200 mb-8">Đăng ký miễn phí — không cần thẻ tín dụng, không giới hạn thời gian.</p>
          <a href="/dang-ky" className="btn btn-outline btn-lg">
            Tạo cửa hàng ngay
          </a>
        </div>
      </section>
    </main>
  )
}
