import type { FAQ } from '@/types'

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Posso có khác gì KiotViet không?',
    answer: 'Posso đơn giản hơn, rẻ hơn và dùng được ngay — không cần cài phần mềm, không cần nhân viên kỹ thuật. Phù hợp cửa hàng vừa và nhỏ muốn bắt đầu nhanh mà không tốn nhiều chi phí thiết lập ban đầu.',
    category: 'general',
    order: 1,
  },
  {
    id: '2',
    question: 'Tôi có mất dữ liệu khi ngừng đăng ký không?',
    answer: 'Không. Bạn có thể xuất toàn bộ dữ liệu ra Excel bất cứ lúc nào, ngay cả khi dùng gói miễn phí. Dữ liệu của bạn luôn là của bạn — Posso không giữ con tin dữ liệu.',
    category: 'pricing',
    order: 2,
  },
  {
    id: '3',
    question: 'Posso có dùng được trên điện thoại không?',
    answer: 'Có. Posso chạy trên trình duyệt của bất kỳ thiết bị nào — điện thoại Android, iPhone, máy tính bảng hay laptop đều được. Không cần cài app riêng, mở trình duyệt là dùng ngay.',
    category: 'technical',
    order: 3,
  },
  {
    id: '4',
    question: 'Tôi có thể dùng thử trước khi trả tiền không?',
    answer: 'Có. Gói Miễn phí không giới hạn thời gian, cho phép quản lý đến 200 sản phẩm và 1 nhân viên — dùng thật sự, không phải bản demo. Các gói trả phí có 14 ngày dùng thử miễn phí.',
    category: 'pricing',
    order: 4,
  },
  {
    id: '5',
    question: 'Posso hỗ trợ in hóa đơn và kết nối máy in không?',
    answer: 'Có. Posso hỗ trợ in hóa đơn nhiệt (máy in bill thông thường) qua WiFi hoặc Bluetooth, và xuất hóa đơn PDF. Các loại máy in phổ biến tại Việt Nam đều tương thích.',
    category: 'technical',
    order: 5,
  },
  {
    id: '6',
    question: 'Dữ liệu của tôi có an toàn không?',
    answer: 'Có. Dữ liệu được mã hóa và lưu trữ trên server bảo mật, sao lưu tự động hàng ngày. Posso dùng HTTPS cho toàn bộ kết nối và không bao giờ chia sẻ dữ liệu của bạn với bên thứ ba.',
    category: 'security',
    order: 6,
  },
  {
    id: '7',
    question: 'Tôi có thể dùng Posso khi mất mạng không?',
    answer: 'Có. Posso hỗ trợ bán hàng offline — khi mất mạng, giao dịch vẫn được lưu cục bộ và tự động đồng bộ lên server khi có kết nối trở lại.',
    category: 'technical',
    order: 7,
  },
]
