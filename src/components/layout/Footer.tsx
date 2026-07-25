import Link from 'next/link'

const LINKS = {
  'Sản phẩm': [
    { label: 'Tính năng', href: '/tinh-nang' },
    { label: 'Ngành hàng', href: '/nganh-hang' },
    { label: 'Bảng giá', href: '/bang-gia' },
    { label: 'Cập nhật mới', href: '/tin-tuc' },
  ],
  'Hỗ trợ': [
    { label: 'Trung tâm hỗ trợ', href: '/ho-tro' },
    { label: 'Hướng dẫn sử dụng', href: '/ho-tro/tai-lieu' },
    { label: 'Liên hệ', href: '/ho-tro/lien-he' },
    { label: 'Hotline: 1900 xxxx', href: 'tel:1900xxxx' },
  ],
  'Công ty': [
    { label: 'Về Posso', href: '/gioi-thieu' },
    { label: 'Khách hàng', href: '/khach-hang' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Tuyển dụng', href: '/tuyen-dung' },
  ],
  'Pháp lý': [
    { label: 'Điều khoản sử dụng', href: '/dieu-khoan' },
    { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
    { label: 'Chính sách cookies', href: '/cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-content py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg text-white no-underline mb-4">
              <span className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center text-white text-sm font-black">P</span>
              Posso
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Phần mềm quản lý bán hàng dành cho hơn 5.000 cửa hàng Việt Nam.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Zalo', 'YouTube'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors text-xs font-semibold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-3">{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors no-underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© 2025 Posso. Tất cả quyền được bảo lưu.</p>
          <p>Được xây dựng với ❤️ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
