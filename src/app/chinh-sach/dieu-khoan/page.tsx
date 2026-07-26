import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  path: '/chinh-sach/dieu-khoan',
  title: 'Điều khoản sử dụng | Posso',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ phần mềm quản lý bán hàng Posso.',
})

const SECTIONS = [
  {
    title: '1. Điều khoản chung',
    body: `Bằng cách đăng ký và sử dụng dịch vụ Posso ("Dịch vụ"), bạn đồng ý tuân thủ các điều khoản và điều kiện này ("Điều khoản").

Nếu bạn đăng ký thay mặt tổ chức hoặc doanh nghiệp, bạn xác nhận rằng bạn có thẩm quyền ràng buộc tổ chức đó với các Điều khoản này.

Posso có quyền cập nhật Điều khoản này theo thời gian. Chúng tôi sẽ thông báo qua email trước ít nhất 15 ngày khi có thay đổi quan trọng.`,
  },
  {
    title: '2. Tài khoản và đăng ký',
    body: `**Điều kiện đăng ký:** Bạn phải từ 18 tuổi trở lên và có khả năng ký kết hợp đồng theo pháp luật Việt Nam.

**Trách nhiệm tài khoản:** Bạn chịu trách nhiệm bảo mật thông tin đăng nhập. Mọi hành động xảy ra dưới tài khoản của bạn đều được coi là do bạn thực hiện.

**Thông tin chính xác:** Bạn cam kết cung cấp thông tin chính xác, đầy đủ khi đăng ký và cập nhật kịp thời khi có thay đổi.

**Một tài khoản, một cửa hàng:** Mỗi tài khoản Posso tương ứng với một doanh nghiệp. Bạn có thể thêm nhiều chi nhánh trong cùng một tài khoản.`,
  },
  {
    title: '3. Phạm vi dịch vụ',
    body: `Posso cung cấp phần mềm quản lý bán hàng dạng SaaS (Software as a Service), bao gồm:

- Hệ thống Point of Sale (POS) bán hàng tại quầy
- Quản lý kho hàng và sản phẩm
- Quản lý khách hàng và chương trình tích điểm
- Báo cáo doanh thu và phân tích kinh doanh
- Quản lý nhân viên và ca làm việc
- Hỗ trợ thanh toán QR (VietQR, các ngân hàng liên kết)

Các tính năng cụ thể phụ thuộc vào gói dịch vụ bạn đăng ký.`,
  },
  {
    title: '4. Thanh toán và hoàn tiền',
    body: `**Chu kỳ thanh toán:** Dịch vụ được tính phí theo tháng hoặc năm tùy gói bạn chọn.

**Gia hạn tự động:** Gói dịch vụ tự động gia hạn vào cuối mỗi kỳ thanh toán. Bạn có thể hủy bất cứ lúc nào trong phần Cài đặt → Gói dịch vụ.

**Dùng thử miễn phí:** Gói dùng thử 30 ngày không yêu cầu thông tin thẻ. Sau 30 ngày, tài khoản chuyển về gói Cơ bản miễn phí nếu không nâng cấp.

**Chính sách hoàn tiền:** Nếu bạn không hài lòng trong vòng 30 ngày kể từ ngày thanh toán đầu tiên, chúng tôi hoàn tiền 100% không hỏi lý do. Liên hệ support@posso.vn để yêu cầu hoàn tiền.`,
  },
  {
    title: '5. Quyền sở hữu dữ liệu',
    body: `**Dữ liệu của bạn là của bạn:** Toàn bộ dữ liệu bạn nhập vào Posso (sản phẩm, khách hàng, giao dịch) đều thuộc quyền sở hữu của bạn.

**Xuất dữ liệu:** Bạn có thể xuất toàn bộ dữ liệu dưới dạng Excel/CSV bất cứ lúc nào, kể cả khi hủy dịch vụ.

**Sau khi hủy dịch vụ:** Dữ liệu của bạn được lưu giữ thêm 90 ngày sau khi tài khoản hết hạn. Sau 90 ngày, dữ liệu sẽ bị xóa vĩnh viễn. Vui lòng xuất dữ liệu trước khi hủy.

**Quyền Posso với dữ liệu:** Chúng tôi chỉ sử dụng dữ liệu ẩn danh, tổng hợp để cải thiện dịch vụ. Chúng tôi không bao giờ truy cập dữ liệu kinh doanh cụ thể của bạn mà không có sự cho phép.`,
  },
  {
    title: '6. Hành vi bị cấm',
    body: `Bạn cam kết không sử dụng Posso để:

- Vi phạm pháp luật Việt Nam hoặc quy định quốc tế áp dụng
- Lưu trữ hoặc xử lý thông tin hàng hóa bị cấm theo pháp luật
- Cố gắng truy cập trái phép vào hệ thống của Posso hoặc tài khoản người dùng khác
- Phát tán mã độc, virus hoặc nội dung gây hại
- Sử dụng API của Posso mà không có sự cho phép bằng văn bản

Vi phạm các điều khoản này có thể dẫn đến đình chỉ hoặc chấm dứt tài khoản ngay lập tức.`,
  },
  {
    title: '7. Giới hạn trách nhiệm',
    body: `Posso cung cấp dịch vụ "nguyên trạng" (as-is). Chúng tôi cam kết:

- **Uptime 99.5%** theo tháng (theo cam kết SLA)
- Hỗ trợ kỹ thuật trong giờ làm việc và khẩn cấp ngoài giờ

Posso không chịu trách nhiệm về:

- Thiệt hại gián tiếp, đặc biệt hoặc từ hậu quả gián đoạn kinh doanh
- Mất dữ liệu do lỗi phần cứng của người dùng
- Thiệt hại xuất phát từ việc người dùng sử dụng dữ liệu không chính xác

Trách nhiệm tối đa của Posso không vượt quá số tiền bạn đã thanh toán trong 3 tháng gần nhất.`,
  },
  {
    title: '8. Chấm dứt dịch vụ',
    body: `**Bạn có thể chấm dứt:** Bất cứ lúc nào bằng cách hủy đăng ký trong phần Cài đặt. Không có phí hủy.

**Posso có thể chấm dứt:** Trong trường hợp vi phạm nghiêm trọng Điều khoản này, có hành vi gian lận, hoặc không thanh toán sau 30 ngày nhắc nhở.

**Sau khi chấm dứt:** Bạn vẫn có quyền truy cập đọc và xuất dữ liệu trong 90 ngày. Sau đó tài khoản và dữ liệu bị xóa vĩnh viễn.`,
  },
  {
    title: '9. Luật điều chỉnh',
    body: `Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại Tòa án nhân dân TP. Hồ Chí Minh, hoặc thông qua thương lượng, hòa giải trước khi khởi kiện.`,
  },
  {
    title: '10. Liên hệ',
    body: `Mọi câu hỏi về Điều khoản sử dụng:

**Email:** legal@posso.vn
**Hotline:** 1900 xxxx
**Địa chỉ:** TP. Hồ Chí Minh, Việt Nam`,
  },
]

export default function TermsPage() {
  return (
    <main>
      <section className="section bg-hero border-b border-slate-100">
        <div className="container-content max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-3">Điều khoản sử dụng</h1>
          <p className="text-black text-sm">Cập nhật lần cuối: 1 tháng 7, 2026</p>
          <p className="text-black mt-4 leading-relaxed">
            Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng dịch vụ Posso. Bằng cách đăng ký tài khoản, bạn đồng ý với toàn bộ điều khoản này.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-content max-w-2xl mx-auto">
          <div className="flex flex-col gap-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold font-display text-slate-900 mb-3">{s.title}</h2>
                <div className="text-black leading-relaxed space-y-3">
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
