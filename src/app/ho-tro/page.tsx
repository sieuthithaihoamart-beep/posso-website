import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Phone, MessageCircle, Mail, BookOpen, Video, Clock } from 'lucide-react'
import { faqs } from '@/lib/data/faqs'
import FAQSection from '@/components/home/FAQSection'
import SectionHeader from '@/components/shared/SectionHeader'

export const metadata: Metadata = buildMetadata({
  path: '/ho-tro',
  title: 'Hỗ trợ khách hàng | Posso',
  description: 'Liên hệ đội ngũ hỗ trợ Posso qua hotline, Zalo, email. Sẵn sàng giúp bạn 24/7.',
})

const CHANNELS = [
  {
    icon: Phone,
    title: 'Hotline',
    value: '1900 xxxx',
    desc: 'Gọi miễn phí 7:00 – 22:00 mỗi ngày',
    cta: 'Gọi ngay',
    href: 'tel:1900xxxx',
    color: 'text-green-600 bg-green-50 border-green-100',
  },
  {
    icon: MessageCircle,
    title: 'Zalo OA',
    value: 'Posso Vietnam',
    desc: 'Nhắn tin Zalo, phản hồi trong 5 phút',
    cta: 'Nhắn Zalo',
    href: 'https://zalo.me/posso',
    color: 'text-primary-600 bg-primary-50 border-primary-100',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'support@posso.vn',
    desc: 'Gửi email, phản hồi trong 2 giờ làm việc',
    cta: 'Gửi email',
    href: 'mailto:support@posso.vn',
    color: 'text-accent-500 bg-accent-50 border-amber-100',
  },
]

const RESOURCES = [
  { icon: BookOpen, title: 'Hướng dẫn sử dụng', desc: 'Tài liệu chi tiết cho từng tính năng', href: '#' },
  { icon: Video, title: 'Video hướng dẫn', desc: 'Xem video demo từng nghiệp vụ', href: '#' },
  { icon: Clock, title: 'Lịch sử cập nhật', desc: 'Changelog các phiên bản mới nhất', href: '#' },
]

export default function SupportPage() {
  return (
    <main>
      <section className="section bg-hero">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">
            Chúng tôi luôn <span className="text-gradient">sẵn sàng</span> giúp bạn
          </h1>
          <p className="text-lg text-black">Đội ngũ hỗ trợ người Việt, hiểu nghiệp vụ cửa hàng, trả lời nhanh trong mọi khung giờ.</p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="section">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-6">
            {CHANNELS.map((ch) => (
              <div key={ch.title} className={`card p-6 border ${ch.color.split(' ')[2]} flex flex-col gap-4`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ch.color.split(' ')[1]}`}>
                  <ch.icon size={22} className={ch.color.split(' ')[0]} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-black uppercase tracking-wide mb-1">{ch.title}</p>
                  <p className="font-bold font-display text-slate-900 text-lg">{ch.value}</p>
                  <p className="text-sm text-black mt-1">{ch.desc}</p>
                </div>
                <a href={ch.href} className="btn btn-secondary btn-sm self-start">
                  {ch.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section bg-slate-50">
        <div className="container-content">
          <SectionHeader badge="Tự học" title="Tài nguyên hỗ trợ" />
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {RESOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="card p-6 flex items-start gap-4 no-underline group hover:shadow-card-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <r.icon size={18} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">{r.title}</p>
                  <p className="text-sm text-black mt-0.5">{r.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </main>
  )
}
