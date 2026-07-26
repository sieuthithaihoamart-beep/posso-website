import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { BookOpen, Play, FileText, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  path: '/ho-tro/tai-lieu',
  title: 'Tài liệu hướng dẫn | Posso',
  description: 'Hướng dẫn sử dụng Posso từ cơ bản đến nâng cao. Video, bài viết, FAQ cho mọi tính năng.',
})

const GUIDES = [
  {
    category: 'Bắt đầu nhanh',
    icon: '🚀',
    articles: [
      { title: 'Tạo cửa hàng và cài đặt ban đầu', time: '5 phút' },
      { title: 'Thêm sản phẩm đầu tiên', time: '3 phút' },
      { title: 'Tạo tài khoản nhân viên', time: '2 phút' },
      { title: 'Thực hiện đơn hàng đầu tiên', time: '5 phút' },
    ],
  },
  {
    category: 'Bán hàng tại quầy',
    icon: '🛒',
    articles: [
      { title: 'Giao diện POS — Hướng dẫn chi tiết', time: '8 phút' },
      { title: 'Thanh toán QR và chuyển khoản', time: '3 phút' },
      { title: 'Áp dụng mã giảm giá và khuyến mãi', time: '5 phút' },
      { title: 'In hóa đơn và cài máy in nhiệt', time: '10 phút' },
    ],
  },
  {
    category: 'Quản lý kho',
    icon: '📦',
    articles: [
      { title: 'Nhập kho từ nhà cung cấp', time: '6 phút' },
      { title: 'Kiểm kho và điều chỉnh tồn', time: '8 phút' },
      { title: 'Cài đặt cảnh báo hàng sắp hết', time: '3 phút' },
      { title: 'Import sản phẩm từ Excel', time: '5 phút' },
    ],
  },
  {
    category: 'Báo cáo & Phân tích',
    icon: '📊',
    articles: [
      { title: 'Đọc hiểu Dashboard tổng quan', time: '5 phút' },
      { title: 'Báo cáo doanh thu theo kỳ', time: '4 phút' },
      { title: 'Xuất báo cáo Excel và PDF', time: '3 phút' },
      { title: 'Phân tích sản phẩm bán chạy/chậm', time: '5 phút' },
    ],
  },
]

export default function DocumentationPage() {
  return (
    <main>
      <section className="section bg-hero">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">
            Tài liệu hướng dẫn
          </h1>
          <p className="text-lg text-black">Từng bước rõ ràng, video trực quan — bắt đầu trong 15 phút.</p>
        </div>
      </section>

      {/* Quick start video */}
      <section className="section border-b border-slate-100">
        <div className="container-content max-w-3xl mx-auto">
          <div className="bg-primary-600 rounded-2xl p-8 flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Play size={24} className="text-white ml-1" />
            </div>
            <div>
              <p className="text-primary-200 text-sm font-medium mb-1">Video hướng dẫn</p>
              <h2 className="text-white font-bold font-display text-xl mb-1">Bắt đầu với Posso trong 5 phút</h2>
              <p className="text-primary-200 text-sm">Xem video tổng quan cách tạo cửa hàng và bán hàng ngay hôm nay</p>
            </div>
            <button className="btn btn-outline shrink-0 hidden sm:flex">Xem ngay</button>
          </div>
        </div>
      </section>

      {/* Guide categories */}
      <section className="section">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-8">
            {GUIDES.map((g) => (
              <div key={g.category} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{g.icon}</span>
                  <h2 className="font-bold font-display text-slate-900">{g.category}</h2>
                </div>
                <div className="flex flex-col gap-1">
                  {g.articles.map((a) => (
                    <a key={a.title} href="#" className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0 group no-underline">
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-slate-300 shrink-0" />
                        <span className="text-sm text-black group-hover:text-primary-600 transition-colors">{a.title}</span>
                      </div>
                      <span className="text-xs text-black shrink-0 ml-2">{a.time}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to support */}
      <section className="py-12 bg-slate-50">
        <div className="container-content text-center">
          <p className="text-black mb-4">Không tìm thấy câu trả lời? Đội hỗ trợ luôn sẵn sàng.</p>
          <Link href="/ho-tro" className="btn btn-primary">Liên hệ hỗ trợ</Link>
        </div>
      </section>
    </main>
  )
}
