import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-sky-500">
      <div className="container-content text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4 leading-tight">
          Bắt đầu bán hàng thông minh hơn hôm nay
        </h2>
        <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Tạo tài khoản trong 2 phút, dùng miễn phí không giới hạn thời gian. Không cần thẻ tín dụng.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dang-ky" className="btn btn-primary btn-lg" style={{ background: '#fff', color: '#2563eb' }}>
            Tạo cửa hàng miễn phí
            <ArrowRight size={18} />
          </Link>
          <Link href="tel:1900xxxx" className="btn btn-outline btn-lg">
            <Phone size={18} />
            Gọi tư vấn
          </Link>
        </div>

        <p className="mt-8 text-primary-200 text-sm">
          Hơn 5.000 cửa hàng trên toàn quốc đang dùng Posso mỗi ngày
        </p>
      </div>
    </section>
  )
}
