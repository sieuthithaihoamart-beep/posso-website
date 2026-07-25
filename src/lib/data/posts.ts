export interface Post {
  slug: string
  title: string
  excerpt: string
  emoji: string
  category: string
  author: string
  readTime: string
  date: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'quan-ly-kho-hieu-qua-cua-hang-nho',
    title: '5 cách quản lý kho hiệu quả cho cửa hàng nhỏ',
    excerpt: 'Hàng tồn kho lộn xộn, mất hàng không biết, nhập nhiều mà lãi ít — đây là bài giải cho chủ cửa hàng nhỏ muốn kiểm soát kho mà không cần thuê thêm người.',
    emoji: '📦',
    category: 'Quản lý kho',
    author: 'Đội Posso',
    readTime: '5 phút',
    date: '20 tháng 7, 2026',
    content: `
Quản lý kho tốt giúp bạn biết chính xác mình có gì, tránh mua trùng và không để mất hàng. Dưới đây là 5 cách thực tế từ kinh nghiệm hàng nghìn cửa hàng đang dùng Posso.

## 1. Đặt mức tồn kho tối thiểu (min-stock)

Thay vì nhớ từng sản phẩm, hãy đặt mức cảnh báo cho từng mặt hàng. Khi tồn kho xuống dưới ngưỡng đó, hệ thống tự nhắc bạn nhập thêm. Posso cho phép cài ngưỡng cảnh báo ngay trong danh sách sản phẩm.

## 2. Nhập kho theo lô (batch)

Mỗi lần nhập hàng, ghi lại số lô, ngày nhập và giá nhập. Khi có sự cố (hàng hỏng, nhà cung cấp sai số lượng), bạn tra cứu được ngay. Tính năng nhập kho của Posso lưu toàn bộ lịch sử từng phiếu nhập.

## 3. Kiểm kho định kỳ — ít nhất mỗi tháng một lần

Đừng đợi đến cuối năm mới kiểm. Kiểm kho hàng tháng chỉ mất 30–60 phút nhưng giúp bạn phát hiện chênh lệch sớm, trước khi trở thành lỗ lớn.

## 4. Phân loại ABC

Hàng loại A (bán chạy, chiếm 80% doanh thu): theo dõi hàng ngày. Hàng loại B: theo dõi hàng tuần. Hàng loại C (bán chậm): kiểm tra hàng tháng. Đừng dành sức ngang nhau cho tất cả mọi thứ.

## 5. Dùng báo cáo hàng bán chậm

Sản phẩm nằm kho quá 30 ngày là tiền bị giam. Xem báo cáo "bán chậm" định kỳ để giảm giá, gộp combo hoặc trả lại nhà cung cấp trước khi hàng lỗi thời.

---

**Tổng kết:** Quản lý kho không cần phức tạp — cần nhất quán. Bắt đầu với 5 bước trên, bạn sẽ thấy lợi nhuận cải thiện rõ chỉ sau 1–2 tháng.
    `,
  },
  {
    slug: 'tang-doanh-thu-bang-chuong-trinh-khach-hang-than-thiet',
    title: 'Tăng doanh thu với chương trình khách hàng thân thiết',
    excerpt: 'Giữ chân khách cũ rẻ hơn tìm khách mới gấp 5 lần. Đây là cách xây chương trình loyalty đơn giản mà hiệu quả cho cửa hàng nhỏ.',
    emoji: '🎁',
    category: 'Kinh doanh',
    author: 'Đội Posso',
    readTime: '4 phút',
    date: '15 tháng 7, 2026',
    content: `
Khách hàng quay lại mua lần 2, lần 3 mới là nguồn thu ổn định. Chương trình thân thiết không cần phức tạp như các chuỗi lớn — cửa hàng nhỏ làm được.

## Tại sao cần chương trình thân thiết?

Theo nghiên cứu thị trường, chi phí có được một khách hàng mới cao gấp 5–7 lần chi phí giữ khách cũ. Một khách quen mua hàng thường xuyên hơn và giới thiệu thêm bạn bè.

## 3 mô hình loyalty phù hợp cửa hàng nhỏ

**Mô hình 1: Tích điểm đổi quà**
Mỗi 10.000đ mua hàng = 1 điểm. 100 điểm = quà tặng hoặc giảm giá. Đơn giản, khách dễ hiểu.

**Mô hình 2: Stamp card (thẻ đóng dấu)**
Mua 9 lần được tặng lần thứ 10. Phù hợp cà phê, tiệm bánh, tiệm nail.

**Mô hình 3: Thẻ thành viên theo hạng**
Bạc → Vàng → Kim cương. Khách chi tiêu nhiều hơn để lên hạng. Phù hợp thời trang, spa, gym.

## Posso hỗ trợ gì?

- Lưu lịch sử mua hàng từng khách
- Gắn điểm tự động khi thanh toán
- Báo cáo khách hàng VIP, khách không quay lại

---

Bắt đầu đơn giản: chỉ cần lưu số điện thoại khách và theo dõi lịch sử mua — bạn đã có nền tảng để xây chương trình thân thiết bất cứ lúc nào.
    `,
  },
  {
    slug: 'cach-doc-bao-cao-ban-hang-theo-ngay-tuan-thang',
    title: 'Cách đọc báo cáo bán hàng theo ngày, tuần, tháng',
    excerpt: 'Số liệu nhiều mà không biết nhìn vào đâu? Hướng dẫn thực tế để đọc báo cáo Posso và ra quyết định kinh doanh thông minh hơn.',
    emoji: '📊',
    category: 'Báo cáo',
    author: 'Đội Posso',
    readTime: '6 phút',
    date: '10 tháng 7, 2026',
    content: `
Báo cáo chỉ có giá trị khi bạn biết đọc và hành động từ đó. Đây là cách đọc ba loại báo cáo quan trọng nhất.

## Báo cáo theo ngày

Xem cuối mỗi ngày (hoặc đầu ngày hôm sau):
- Tổng doanh thu hôm qua
- Số đơn và giá trị trung bình mỗi đơn
- Sản phẩm bán chạy nhất trong ngày

**Hành động:** Nếu doanh thu thấp hơn ngày tương ứng tuần trước, tìm nguyên nhân ngay.

## Báo cáo theo tuần

Xem vào sáng thứ 2 mỗi tuần:
- So sánh tuần này vs tuần trước
- Thứ mấy bán tốt nhất? Thứ mấy yếu nhất?
- Sản phẩm nào tăng trưởng, sản phẩm nào giảm?

**Hành động:** Sắp xếp nhân viên theo khung giờ cao điểm. Đẩy mạnh sản phẩm tăng trưởng.

## Báo cáo theo tháng

Xem ngày 1–3 mỗi tháng:
- Tổng doanh thu và lợi nhuận
- So sánh với tháng trước và cùng kỳ năm ngoái
- Top 10 sản phẩm bán chạy
- Tỷ lệ khách quay lại

**Hành động:** Quyết định nhập kho tháng sau, điều chỉnh giá bán, lên kế hoạch khuyến mãi.

---

Gợi ý: dành 10 phút mỗi tuần để xem báo cáo sẽ giúp bạn ra quyết định nhanh hơn và tránh được nhiều sai lầm tốn kém.
    `,
  },
  {
    slug: 'posso-ra-mat-tinh-nang-bao-cao-nang-cao',
    title: 'Posso ra mắt tính năng Báo cáo nâng cao',
    excerpt: 'Phiên bản 2.5 của Posso tích hợp báo cáo lợi nhuận theo sản phẩm, biểu đồ so sánh kỳ và xuất Excel tự động — tất cả trong một cú click.',
    emoji: '🚀',
    category: 'Cập nhật',
    author: 'Đội Posso',
    readTime: '3 phút',
    date: '5 tháng 7, 2026',
    content: `
Chúng tôi vừa phát hành Posso 2.5 với hàng loạt cải tiến báo cáo dựa trên phản hồi từ cộng đồng người dùng.

## Những điểm mới

**Báo cáo lợi nhuận theo sản phẩm**
Không chỉ xem doanh thu — giờ bạn thấy lãi gộp từng mặt hàng. Biết đâu sản phẩm bán chạy nhất lại không phải sản phẩm lãi nhất.

**Biểu đồ so sánh kỳ**
So sánh tháng này vs tháng trước, quý này vs quý trước ngay trên cùng một biểu đồ. Không cần mở hai tab, không cần copy-paste sang Excel.

**Xuất báo cáo tự động theo lịch**
Cài đặt một lần, Posso tự gửi báo cáo vào email của bạn vào 7h sáng thứ 2 hàng tuần (hoặc đầu tháng).

**Chia sẻ báo cáo với kế toán**
Tạo link chia sẻ báo cáo có thời hạn cho kế toán xem mà không cần cấp quyền đăng nhập.

## Cách cập nhật

Posso tự cập nhật — không cần cài lại. Đăng xuất và đăng nhập lại là xong.

---

Có tính năng nào bạn muốn thấy trong phiên bản tiếp theo? Nhắn cho chúng tôi qua Zalo OA hoặc email support@posso.vn.
    `,
  },
  {
    slug: 'thanh-toan-qr-xu-huong-khong-the-bo-qua',
    title: 'Thanh toán QR: xu hướng không thể bỏ qua năm 2026',
    excerpt: 'Hơn 70% giao dịch tại cửa hàng bán lẻ Việt Nam đã qua QR. Nếu chưa bật tính năng này, bạn đang để mất khách.',
    emoji: '📱',
    category: 'Xu hướng',
    author: 'Đội Posso',
    readTime: '4 phút',
    date: '1 tháng 7, 2026',
    content: `
Thanh toán QR không còn là xu hướng — đó là tiêu chuẩn. Nếu cửa hàng bạn chưa có QR, bạn đang bất lợi so với đối thủ.

## Con số nói lên tất cả

- 78% người Việt trả tiền bằng QR khi mua sắm tại cửa hàng (Napas 2025)
- 43% khách từ chối mua hàng nếu nơi bán không có QR
- Trung bình giao dịch QR tại cửa hàng nhỏ tăng 15% qua từng năm

## QR giúp gì cho cửa hàng?

**Giảm tiền lẻ và sai sót:** Không phải đếm tiền thừa, không nhầm tờ 200k với 500k.

**Đối soát tự động:** Mọi giao dịch QR đều có bằng chứng số — tranh chấp "tôi trả rồi" được giải quyết ngay.

**Khách hàng trẻ ưa thích:** Gen Z và Millennial thanh toán gần như 100% qua QR.

## Cách bật QR trong Posso

1. Vào Cài đặt → Thanh toán
2. Chọn ngân hàng liên kết (hỗ trợ 20+ ngân hàng)
3. Nhập số tài khoản
4. Xong — QR tự hiện trên màn hình POS khi checkout

Khách quét, tiền vào tài khoản, đơn tự đóng. Không cần bấm gì thêm.
    `,
  },
  {
    slug: 'mo-chuoi-cua-hang-thu-hai-nhung-dieu-can-biet',
    title: 'Mở cửa hàng thứ hai: những điều cần biết trước khi mở rộng',
    excerpt: 'Cửa hàng đầu đang chạy tốt và bạn muốn mở thêm? Đây là 4 câu hỏi phải trả lời được trước khi ký hợp đồng thuê mặt bằng.',
    emoji: '🏪',
    category: 'Kinh doanh',
    author: 'Đội Posso',
    readTime: '5 phút',
    date: '25 tháng 6, 2026',
    content: `
Mở rộng là giấc mơ của nhiều chủ cửa hàng — nhưng cũng là bẫy nếu chưa sẵn sàng. Hãy trả lời 4 câu này trước.

## 1. Cửa hàng đầu tiên có đang chạy được mà không cần bạn không?

Nếu bạn phải có mặt hàng ngày mới ổn, mở cửa hàng thứ hai sẽ làm cả hai xuống cấp. Quy trình phải được viết ra và nhân viên phải chạy được không cần chủ.

## 2. Bạn có đủ vốn lưu động cho ít nhất 6 tháng không?

Cửa hàng mới thường lỗ 3–6 tháng đầu trước khi hoà vốn. Tính trước: tiền thuê mặt bằng, lương nhân viên, hàng hoá, chi phí vận hành. Có đủ đệm không?

## 3. Hệ thống quản lý có mở rộng được không?

Nếu bạn đang dùng sổ tay hoặc Excel, mở cửa hàng thứ hai là lúc phải chuyển sang phần mềm. Posso hỗ trợ nhiều chi nhánh trong cùng tài khoản — xem doanh thu, kho, nhân viên mỗi chi nhánh từ một màn hình.

## 4. Bạn có người tin tưởng quản lý chi nhánh không?

Tìm quản lý chi nhánh khó hơn tìm mặt bằng. Đào tạo trước 2–3 tháng, thử trao quyền ở cửa hàng hiện tại xem họ có làm được không.

---

Mở rộng đúng lúc và đúng cách sẽ nhân đôi doanh thu. Làm vội sẽ nhân đôi rắc rối.
    `,
  },
  {
    slug: 'setup-may-tinh-tien-cho-nguoi-moi-bat-dau',
    title: 'Setup máy tính tiền cho người mới bắt đầu',
    excerpt: 'Máy tính tiền, máy in hóa đơn, máy quét mã vạch — cần gì và bao nhiêu tiền? Hướng dẫn thực tế cho cửa hàng nhỏ.',
    emoji: '🖥️',
    category: 'Hướng dẫn',
    author: 'Đội Posso',
    readTime: '7 phút',
    date: '20 tháng 6, 2026',
    content: `
Bạn không cần mua set thiết bị đắt tiền để có một quầy thu ngân chuyên nghiệp. Đây là hướng dẫn thực tế.

## Thiết bị tối thiểu cần có

**1. Thiết bị chạy phần mềm POS**
- Tablet Android 10" (2–4 triệu): đủ dùng, dễ vệ sinh, không sợ hỏng
- iPad 9th gen (7–8 triệu): màn đẹp, chạy mượt lâu dài
- Máy tính bàn/laptop cũ: tiết kiệm nhất nếu đã có sẵn

**2. Máy in hoá đơn nhiệt**
- In khổ 58mm (50–80mm): phổ biến nhất, giá 400–800k
- In khổ 80mm: giấy rộng hơn, giá 600k–1.2tr
- Kết nối USB hoặc Bluetooth (Bluetooth tiện hơn, ít dây)

**3. Máy quét mã vạch** (nếu cần)
- Quét 1D barcode: 200–400k, đủ dùng
- Quét QR (2D): 400–700k, cần cho thanh toán VietQR
- Nhiều cửa hàng dùng camera phone quét được nếu ít hàng

## Thiết bị nâng cấp thêm

- Màn hình khách hàng (customer display): 800k–1.5tr
- Ngăn kéo tiền: 300–500k
- Cân điện tử tích hợp: cho tạp hoá, siêu thị mini

## Tổng chi phí thực tế

| Mức | Thiết bị | Chi phí |
|-----|----------|---------|
| Cơ bản | Tablet + máy in | 1–2 triệu |
| Đầy đủ | Tablet + in + quét QR | 2–4 triệu |
| Chuyên nghiệp | Tất cả + màn khách + ngăn kéo | 4–8 triệu |

---

Bắt đầu ở mức cơ bản và nâng cấp dần khi cần — đừng đổ tiền một lúc cho thiết bị khi chưa biết workflow của mình.
    `,
  },
  {
    slug: 'xu-ly-hang-tra-hoan-tien-dung-cach',
    title: 'Xử lý hàng trả và hoàn tiền đúng cách để giữ khách',
    excerpt: 'Khách đổi trả hàng không phải là vấn đề — xử lý không khéo mới là vấn đề. Quy trình đúng sẽ biến tình huống căng thẳng thành cơ hội giữ chân khách.',
    emoji: '🔄',
    category: 'Vận hành',
    author: 'Đội Posso',
    readTime: '4 phút',
    date: '15 tháng 6, 2026',
    content: `
Khách mua hàng rồi muốn đổi trả — đây là tình huống mọi cửa hàng gặp. Cách xử lý quyết định khách có quay lại hay không.

## Nguyên tắc vàng: giải quyết nhanh, không làm khó

Mỗi phút kéo dài quy trình đổi trả, cơ hội mất khách tăng thêm. Khách không muốn nghe giải thích — họ muốn được giải quyết.

## Quy trình chuẩn xử lý đổi trả

**Bước 1:** Nghe và xác nhận vấn đề (30 giây)
"Dạ em hiểu, anh/chị muốn đổi sang size khác / hoàn tiền."

**Bước 2:** Kiểm tra điều kiện đổi trả theo chính sách cửa hàng

**Bước 3:** Xử lý trên phần mềm
- Tạo phiếu hoàn hàng trong Posso
- Kho tự cộng lại, doanh thu tự trừ
- In biên nhận cho khách

**Bước 4:** Hoàn tiền hoặc đổi sản phẩm
Hoàn tiền qua cùng phương thức thanh toán ban đầu (tiền mặt / chuyển khoản).

## Lưu lại mọi giao dịch đổi trả

Posso lưu đầy đủ lịch sử: ai trả hàng, sản phẩm nào, lý do gì, nhân viên nào xử lý. Cuối tháng xem báo cáo đổi trả để phát hiện sản phẩm có vấn đề.

---

Khách hàng đổi trả nhiều nhất thường là khách trung thành nhất nếu bạn xử lý tốt. Họ tin tưởng cửa hàng đủ để quay lại đổi trả — đừng phụ lòng họ.
    `,
  },
]
