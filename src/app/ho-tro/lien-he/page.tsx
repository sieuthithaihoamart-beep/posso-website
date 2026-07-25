import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  path: '/ho-tro/lien-he',
  title: 'Liên hệ | Posso',
  description: 'Liên hệ đội ngũ Posso qua hotline, Zalo hoặc email. Phản hồi trong 5 phút.',
})

export default function ContactPage() {
  return (
    <main>
      <section className="section bg-hero">
        <div className="container-content text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-slate-600">Đội hỗ trợ người Việt, hiểu nghiệp vụ cửa hàng — phản hồi nhanh trong mọi khung giờ.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-content max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold font-display text-slate-900">Kênh liên hệ</h2>

              {[
                { icon: Phone, label: 'Hotline', value: '1900 xxxx', sub: 'Gọi miễn phí 7:00 – 22:00 mỗi ngày', href: 'tel:1900xxxx', color: 'text-green-600 bg-green-50' },
                { icon: MessageCircle, label: 'Zalo OA', value: 'Posso Vietnam', sub: 'Nhắn tin, phản hồi trong 5 phút', href: 'https://zalo.me/posso', color: 'text-primary-600 bg-primary-50' },
                { icon: Mail, label: 'Email', value: 'support@posso.vn', sub: 'Phản hồi trong 2 giờ làm việc', href: 'mailto:support@posso.vn', color: 'text-amber-600 bg-amber-50' },
                { icon: MapPin, label: 'Địa chỉ', value: 'TP. Hồ Chí Minh', sub: 'Văn phòng tại Quận 1, HCM', href: '#', color: 'text-slate-600 bg-slate-50' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-4 no-underline group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.color}`}>
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{c.label}</p>
                    <p className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">{c.value}</p>
                    <p className="text-sm text-slate-500">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="card p-6">
              <h2 className="text-xl font-bold font-display text-slate-900 mb-5">Gửi tin nhắn</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Họ và tên</label>
                  <input className="input" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
                  <input className="input" placeholder="0901 234 567" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nội dung</label>
                  <textarea className="input resize-none" rows={4} placeholder="Mô tả vấn đề bạn cần hỗ trợ..." />
                </div>
                <button className="btn btn-primary w-full justify-center">Gửi tin nhắn</button>
                <p className="text-xs text-slate-400 text-center">Chúng tôi phản hồi trong vòng 2 giờ làm việc</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
