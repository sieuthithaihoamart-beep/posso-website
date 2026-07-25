import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  path: '/chinh-sach/bao-mat',
  title: 'Chính sách bảo mật | Posso',
  description: 'Posso cam kết bảo vệ dữ liệu cá nhân và thông tin kinh doanh của khách hàng theo quy định pháp luật Việt Nam.',
})

const SECTIONS = [
  {
    title: '1. Thông tin chúng tôi thu thập',
    body: `Khi bạn đăng ký và sử dụng Posso, chúng tôi thu thập các thông tin sau:

**Thông tin tài khoản:** Họ tên, số điện thoại, email, tên cửa hàng, địa chỉ kinh doanh.

**Thông tin giao dịch:** Dữ liệu bán hàng, sản phẩm, kho hàng và các báo cáo kinh doanh mà bạn tạo ra trong hệ thống.

**Thông tin kỹ thuật:** Địa chỉ IP, loại thiết bị, trình duyệt, thời gian truy cập — dùng để cải thiện hiệu năng và bảo mật hệ thống.`,
  },
  {
    title: '2. Mục đích sử dụng thông tin',
    body: `Thông tin thu thập được dùng để:

- Cung cấp và vận hành dịch vụ Posso
- Hỗ trợ kỹ thuật và xử lý yêu cầu từ người dùng
- Gửi thông báo quan trọng về tài khoản và hệ thống
- Cải thiện tính năng và trải nghiệm người dùng
- Tuân thủ các nghĩa vụ pháp lý`,
  },
  {
    title: '3. Bảo vệ thông tin',
    body: `Posso áp dụng các biện pháp bảo mật kỹ thuật cao:

**Mã hóa dữ liệu:** Toàn bộ dữ liệu truyền tải qua HTTPS/TLS 1.3. Mật khẩu được mã hóa một chiều (bcrypt).

**Kiểm soát truy cập:** Hệ thống phân quyền chặt chẽ — chủ cửa hàng quyết định nhân viên được xem gì.

**Sao lưu dữ liệu:** Dữ liệu được sao lưu tự động hàng ngày tại nhiều vị trí địa lý.

**Giám sát 24/7:** Hệ thống phát hiện xâm nhập bất thường và cảnh báo ngay lập tức.`,
  },
  {
    title: '4. Chia sẻ thông tin',
    body: `Chúng tôi **không bán, không trao đổi, không cho thuê** dữ liệu cá nhân của bạn cho bên thứ ba với mục đích thương mại.

Thông tin chỉ được chia sẻ trong các trường hợp:

- Được sự đồng ý rõ ràng của bạn
- Yêu cầu của cơ quan pháp luật có thẩm quyền
- Đối tác cung cấp dịch vụ hạ tầng kỹ thuật (cloud hosting, payment gateway) — với cam kết bảo mật tương đương`,
  },
  {
    title: '5. Quyền của người dùng',
    body: `Bạn có các quyền sau đối với dữ liệu của mình:

**Quyền truy cập:** Xem toàn bộ dữ liệu cửa hàng bất cứ lúc nào trong hệ thống Posso.

**Quyền chỉnh sửa:** Cập nhật thông tin cá nhân và cửa hàng trong phần Cài đặt.

**Quyền xuất dữ liệu:** Xuất toàn bộ dữ liệu dạng Excel/CSV bất kỳ lúc nào.

**Quyền xóa tài khoản:** Gửi yêu cầu xóa tài khoản qua support@posso.vn. Chúng tôi xử lý trong 30 ngày làm việc.`,
  },
  {
    title: '6. Cookies',
    body: `Posso sử dụng cookie để:

- Duy trì phiên đăng nhập (bắt buộc)
- Ghi nhớ cài đặt giao diện của bạn
- Phân tích lưu lượng truy cập (Google Analytics — ẩn danh)

Bạn có thể tắt cookie không bắt buộc trong cài đặt trình duyệt. Cookie phiên đăng nhập là bắt buộc để hệ thống hoạt động.`,
  },
  {
    title: '7. Liên hệ',
    body: `Mọi câu hỏi về bảo mật dữ liệu, vui lòng liên hệ:

**Email:** privacy@posso.vn
**Hotline:** 1900 xxxx (Thứ 2 – Thứ 7, 8:00 – 17:30)
**Địa chỉ:** Tầng X, số YY đường ZZ, Quận 1, TP. HCM

Chúng tôi cam kết phản hồi trong vòng 3 ngày làm việc.`,
  },
]

export default function PrivacyPage() {
  return (
    <main>
      <section className="section bg-hero border-b border-slate-100">
        <div className="container-content max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-3">Chính sách bảo mật</h1>
          <p className="text-slate-500 text-sm">Cập nhật lần cuối: 1 tháng 7, 2026</p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Posso cam kết bảo vệ quyền riêng tư và dữ liệu kinh doanh của bạn. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-content max-w-2xl mx-auto">
          <div className="flex flex-col gap-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold font-display text-slate-900 mb-3">{s.title}</h2>
                <div className="text-slate-600 leading-relaxed space-y-3">
                  {s.body.split('\n\n').map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/^- (.+)$/gm, '• $1'),
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
