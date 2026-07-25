import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-hero py-20 lg:py-28">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-100 shadow-sm text-sm font-medium text-primary-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Hỗ trợ 26 ngành bán lẻ · Miễn phí mãi mãi
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-6">
            Quản lý cửa hàng{' '}
            <span className="text-gradient">dễ như nhắn tin</span>
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Posso giúp chủ cửa hàng bán hàng, quản kho, báo cáo doanh thu — tất cả trên một nền tảng, mở ngay trên điện thoại, không cần cài đặt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dang-ky" className="btn btn-primary btn-lg">
              Dùng thử miễn phí
              <ArrowRight size={18} />
            </Link>
            <Link href="#features" className="btn btn-secondary btn-lg">
              <Play size={16} />
              Xem demo
            </Link>
          </div>

          {/* Trust */}
          <p className="mt-6 text-sm text-slate-400">
            Không cần thẻ tín dụng · Bắt đầu trong 5 phút · Hủy bất cứ lúc nào
          </p>
        </div>

        {/* Mockup placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white rounded-md h-5 mx-4 flex items-center px-3">
                <span className="text-xs text-slate-400">cửahàng.posso.vn</span>
              </div>
            </div>
            {/* App preview */}
            <div className="bg-slate-50 p-6 grid grid-cols-3 gap-4 min-h-48">
              {[
                { label: 'Doanh thu hôm nay', value: '12.450.000đ', color: 'text-green-600' },
                { label: 'Đơn hàng', value: '47', color: 'text-primary-600' },
                { label: 'Sản phẩm sắp hết', value: '3', color: 'text-orange-600' },
              ].map((stat) => (
                <div key={stat.label} className="card p-4">
                  <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                  <p className={`text-xl font-bold font-display ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
