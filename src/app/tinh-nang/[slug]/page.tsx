import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, ArrowRight } from 'lucide-react'
import { features } from '@/lib/data/features'
import { pricingPlans } from '@/lib/data/pricing'
import { buildMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const feature = features.find((f) => f.id === slug)
  if (!feature) return {}
  return buildMetadata({
    path: `/tinh-nang/${slug}`,
    title: `${feature.name} | Tính năng Posso`,
    description: feature.shortDescription,
  })
}

const FEATURE_DETAILS: Record<string, {
  hero: string
  pain: string
  howItWorks: string[]
  useCases: { industry: string; example: string }[]
  faq: { q: string; a: string }[]
}> = {
  pos: {
    hero: 'Bán hàng nhanh hơn, sai sót bằng không',
    pain: 'Bấm nhầm giá, quên áp mã giảm giá, khách chờ lâu — những lỗi nhỏ mỗi ngày cộng lại thành doanh thu mất đi. Posso giải quyết tất cả với giao diện thu ngân đơn giản nhất Việt Nam.',
    howItWorks: [
      'Quét mã vạch hoặc gõ tên sản phẩm — tìm thấy ngay trong 0.3 giây',
      'Giỏ hàng hiện giá, giảm giá, tổng tiền tự động — không cần bấm máy tính',
      'Chọn phương thức thanh toán: tiền mặt, chuyển khoản, QR Pay',
      'In hóa đơn nhiệt hoặc gửi link hóa đơn điện tử qua Zalo',
      'Ca tiếp theo tiếp tục bình thường — dữ liệu lưu đầy đủ',
    ],
    useCases: [
      { industry: 'Tạp hóa', example: 'Quét nhanh hàng chục sản phẩm, nhận tiền mặt và QR mà không cần đếm tiền thừa.' },
      { industry: 'Quán cà phê', example: 'Thu ngân nhập order, bếp nhận phiếu in tự động — phục vụ song song nhiều bàn.' },
      { industry: 'Thời trang', example: 'Tìm sản phẩm theo màu/size, áp mã giảm giá Flash Sale, in tag giá mới tức thì.' },
    ],
    faq: [
      { q: 'Thu ngân mới học bao lâu?', a: 'Phần lớn nhân viên bắt đầu bán hàng ngay sau 15 phút hướng dẫn. Giao diện thiết kế như điện thoại smartphone, không cần đào tạo dài.' },
      { q: 'Bán được khi mất mạng không?', a: 'Có. Posso lưu dữ liệu offline và đồng bộ tự động khi có lại mạng. Không bỏ lỡ đơn hàng nào.' },
    ],
  },
  inventory: {
    hero: 'Biết kho đang có gì — từng sản phẩm, từng thùng',
    pain: 'Hàng bán hết mà không biết, nhập thừa hàng ế, không biết vì sao hàng hụt — đây là nỗi đau mà mọi chủ cửa hàng đều gặp khi quản lý kho bằng Excel hoặc trí nhớ.',
    howItWorks: [
      'Mỗi sản phẩm bán ra tự động trừ tồn kho — không cần nhập tay',
      'Cảnh báo ngay khi hàng xuống dưới mức tối thiểu bạn đặt',
      'Nhập kho từ nhà cung cấp: scan mã vạch, nhập số lượng, lưu phiếu',
      'Kiểm kho cuối ngày: so sánh thực tế với hệ thống, ghi chú chênh lệch',
      'Xem lịch sử xuất nhập theo từng sản phẩm bất kỳ lúc nào',
    ],
    useCases: [
      { industry: 'Siêu thị mini', example: 'Quản lý 500+ SKU, biết chính xác sản phẩm nào sắp hết để đặt hàng trước.' },
      { industry: 'Nhà thuốc', example: 'Theo dõi hạn dùng thuốc, cảnh báo hàng sắp hết hạn để xử lý kịp thời.' },
      { industry: 'Vật liệu xây dựng', example: 'Quản lý theo lô, theo đơn vị tính (cuộn, tấm, kg) — xuất hàng theo đơn đặt hàng.' },
    ],
    faq: [
      { q: 'Quản lý được bao nhiêu sản phẩm?', a: 'Không giới hạn. Cửa hàng có 5 hay 5,000 sản phẩm đều chạy mượt.' },
      { q: 'Có thể nhập kho bằng file Excel không?', a: 'Có. Upload file Excel danh sách sản phẩm và số lượng — hệ thống cập nhật tự động.' },
    ],
  },
  reporting: {
    hero: 'Biết ngay hôm nay bán được bao nhiêu — không cần chờ đến tối',
    pain: 'Cuối ngày mới ngồi cộng sổ, không biết giờ nào đông khách, không rõ sản phẩm nào kéo doanh thu — kinh doanh theo cảm tính không thể phát triển được.',
    howItWorks: [
      'Dashboard hiện doanh thu hôm nay theo giờ — mở app là thấy ngay',
      'Top 10 sản phẩm bán chạy nhất và chậm nhất tuần này',
      'So sánh doanh thu tuần này với tuần trước — tăng/giảm bao nhiêu %',
      'Báo cáo theo nhân viên: ai bán được nhiều nhất ca hôm nay',
      'Xuất Excel/PDF gửi cho kế toán hoặc nhà đầu tư',
    ],
    useCases: [
      { industry: 'Chuỗi cửa hàng', example: 'So sánh doanh thu từng chi nhánh theo ngày, phát hiện ngay chi nhánh đang chậm.' },
      { industry: 'Quán ăn', example: 'Biết giờ cao điểm 11h-13h và 17h-19h để điều nhân viên hợp lý.' },
      { industry: 'Spa & Beauty', example: 'Báo cáo doanh thu theo dịch vụ và theo nhân viên thực hiện — tính hoa hồng tự động.' },
    ],
    faq: [
      { q: 'Dữ liệu báo cáo lưu bao lâu?', a: 'Toàn bộ lịch sử từ ngày mở cửa hàng — không giới hạn thời gian.' },
      { q: 'Có xem báo cáo trên điện thoại được không?', a: 'Có. Biểu đồ và bảng số liệu tối ưu cho màn hình nhỏ, đọc được rõ ràng.' },
    ],
  },
  customers: {
    hero: 'Biến khách vãng lai thành khách quen — tự động',
    pain: 'Khách mua lần đầu rồi không quay lại, không có cách nào liên lạc lại, không biết khách thích sản phẩm gì — mất khách mà không hay.',
    howItWorks: [
      'Lưu số điện thoại khách khi thanh toán — tạo hồ sơ trong 5 giây',
      'Mỗi lần mua hàng tự động cộng điểm — khách đổi điểm lấy quà',
      'Xem toàn bộ lịch sử mua hàng của một khách bất kỳ lúc nào',
      'Phân nhóm khách VIP, khách thường xuyên, khách mới để ưu đãi đúng đối tượng',
      'Ghi chú công nợ — khách mua thiếu, trả sau, quản lý rõ ràng',
    ],
    useCases: [
      { industry: 'Hair Salon & Nail', example: 'Lưu thông tin dịch vụ đã làm, nhắc lịch hẹn tiếp theo — giữ khách quay lại.' },
      { industry: 'Tạp hóa', example: 'Khách mua thiếu: ghi nợ ngay vào hệ thống, tổng nợ hiện rõ ở lần mua tiếp theo.' },
      { industry: 'Thời trang', example: 'Ghi nhớ size, màu sắc yêu thích — báo khi về hàng mới đúng sở thích.' },
    ],
    faq: [
      { q: 'Điểm tích lũy cài đặt như thế nào?', a: 'Tự chọn: 1 điểm cho mỗi 10,000đ hay 50,000đ — tuỳ chính sách cửa hàng. Đổi điểm lấy giảm giá hoặc quà.' },
      { q: 'Thông tin khách hàng có bảo mật không?', a: 'Có. Dữ liệu mã hóa, chỉ chủ cửa hàng truy cập — tuân thủ quy định bảo vệ dữ liệu cá nhân.' },
    ],
  },
  staff: {
    hero: 'Phân quyền rõ ràng — chủ yên tâm, nhân viên làm đúng việc',
    pain: 'Thu ngân xem được cả báo cáo doanh thu, nhân viên thấy giá vốn hàng hóa, không biết ai làm gì trong ca — thiếu kiểm soát dẫn đến rủi ro và thất thoát.',
    howItWorks: [
      'Tạo tài khoản nhân viên, gán vai trò: Chủ / Quản lý / Thu ngân',
      'Thu ngân chỉ thấy màn hình bán hàng — không xem được báo cáo hay giá vốn',
      'Quản lý xem báo cáo nhưng không thể xóa đơn hoặc sửa giá',
      'Chủ cửa hàng có toàn quyền, log lại mọi thao tác quan trọng',
      'Theo dõi ca làm: giờ vào, giờ ra, doanh số từng ca',
    ],
    useCases: [
      { industry: 'Chuỗi cửa hàng', example: 'Quản lý chi nhánh A thấy số liệu chi nhánh A — không thấy chi nhánh B.' },
      { industry: 'Nhà hàng', example: 'Thu ngân bán hàng, bếp nhận phiếu, quản lý ca duyệt hủy đơn — phân quyền rõ ràng.' },
      { industry: 'Spa', example: 'Theo dõi dịch vụ từng kỹ thuật viên để tính hoa hồng chính xác cuối tháng.' },
    ],
    faq: [
      { q: 'Tạo được bao nhiêu tài khoản nhân viên?', a: 'Gói Free: 2 tài khoản. Gói Basic: 5. Gói Pro: không giới hạn.' },
      { q: 'Nhân viên quên PIN thì xử lý thế nào?', a: 'Chủ cửa hàng reset PIN cho nhân viên ngay trong ứng dụng, không cần liên hệ hỗ trợ.' },
    ],
  },
  multidevice: {
    hero: 'Một hệ thống, dùng được mọi nơi — điện thoại, máy tính, máy tính bảng',
    pain: 'Phần mềm chỉ cài được trên máy tính quầy, muốn xem báo cáo khi về nhà không được, nhân viên dùng điện thoại riêng không đồng bộ — bị trói vào một chỗ.',
    howItWorks: [
      'Mở trình duyệt bất kỳ thiết bị nào, đăng nhập — xong',
      'Bán hàng trên điện thoại cảm ứng: giao diện tự điều chỉnh theo màn hình',
      'Xem báo cáo trên laptop hoặc TV khi họp — biểu đồ hiện rõ',
      'Nhiều thiết bị cùng dùng một lúc — đồng bộ theo thời gian thực',
      'Mất mạng: tiếp tục bán, đồng bộ lại tự động khi có mạng',
    ],
    useCases: [
      { industry: 'Chủ chuỗi cửa hàng', example: 'Nằm ở nhà xem doanh thu cả 3 chi nhánh trên điện thoại — biết ngay chi nhánh nào đang chậm.' },
      { industry: 'Hội chợ / sự kiện', example: 'Bán hàng tạm thời bằng điện thoại, không cần mang máy tính — dữ liệu vẫn đồng bộ về hệ thống chính.' },
      { industry: 'Giao hàng tận nơi', example: 'Nhân viên giao hàng in hóa đơn từ điện thoại, xác nhận thanh toán ngay tại nhà khách.' },
    ],
    faq: [
      { q: 'Cần kết nối mạng không?', a: 'Bán hàng hoạt động offline. Các tính năng đồng bộ và báo cáo realtime cần kết nối internet.' },
      { q: 'Tốc độ tải trên điện thoại có chậm không?', a: 'Posso tối ưu cho mạng 4G Việt Nam — tải dưới 2 giây ngay cả trên mạng yếu.' },
    ],
  },
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const feature = features.find((f) => f.id === slug)
  if (!feature) notFound()

  const detail = FEATURE_DETAILS[slug]
  const otherFeatures = features.filter((f) => f.id !== slug).slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <section className="section bg-hero">
        <div className="container-content">
          <Link href="/tinh-nang" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:underline mb-6 no-underline">
            <ArrowLeft size={14} /> Tất cả tính năng
          </Link>
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">{feature.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4 leading-tight">
              {detail?.hero || feature.name}
            </h1>
            <p className="text-xl text-black leading-relaxed mb-8">{feature.shortDescription}</p>
            <Link href="/dang-ky" className="btn btn-primary btn-lg">
              Dùng thử miễn phí <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pain point */}
      {detail?.pain && (
        <section className="section border-b border-slate-100">
          <div className="container-content max-w-3xl">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-amber-700 mb-2">Vấn đề thường gặp</p>
              <p className="text-black leading-relaxed">{detail.pain}</p>
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="section">
        <div className="container-content max-w-4xl">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-8">Hoạt động như thế nào?</h2>
          <div className="flex flex-col gap-4">
            {(detail?.howItWorks || feature.details).map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-black leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      {detail?.useCases && (
        <section className="section bg-slate-50">
          <div className="container-content">
            <h2 className="text-2xl font-bold font-display text-slate-900 mb-8 text-center">Áp dụng thực tế</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {detail.useCases.map((uc) => (
                <div key={uc.industry} className="card p-6">
                  <p className="font-bold text-primary-700 text-sm mb-2">{uc.industry}</p>
                  <p className="text-black text-sm leading-relaxed">{uc.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Details list */}
      <section className="section">
        <div className="container-content max-w-2xl">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Tính năng cụ thể</h2>
          <div className="flex flex-col gap-3">
            {feature.details.map((d) => (
              <div key={d} className="flex items-start gap-3">
                <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span className="text-black">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {detail?.faq && (
        <section className="section bg-slate-50">
          <div className="container-content max-w-2xl">
            <h2 className="text-2xl font-bold font-display text-slate-900 mb-8">Câu hỏi thường gặp</h2>
            <div className="flex flex-col gap-4">
              {detail.faq.map((item) => (
                <div key={item.q} className="card p-6">
                  <p className="font-semibold text-slate-800 mb-2">{item.q}</p>
                  <p className="text-black text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other features */}
      <section className="section border-t border-slate-100">
        <div className="container-content">
          <h2 className="text-xl font-bold font-display text-slate-900 mb-6">Tính năng khác</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherFeatures.map((f) => (
              <Link key={f.id} href={`/tinh-nang/${f.id}`} className="card p-5 flex items-start gap-3 no-underline group hover:shadow-card-hover transition-shadow">
                <span className="text-2xl">{f.emoji}</span>
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors text-sm">{f.name}</p>
                  <p className="text-xs text-black mt-0.5 leading-snug">{f.shortDescription.slice(0, 60)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-4">Sẵn sàng trải nghiệm {feature.name}?</h2>
          <p className="text-primary-200 mb-8">Miễn phí mãi mãi cho gói cơ bản. Không cần thẻ tín dụng.</p>
          <Link href="/dang-ky" className="btn btn-outline btn-lg">Tạo cửa hàng miễn phí</Link>
        </div>
      </section>
    </main>
  )
}
