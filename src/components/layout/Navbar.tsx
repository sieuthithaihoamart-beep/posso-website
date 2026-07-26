'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Tính năng', href: '/tinh-nang' },
  { label: 'Ngành hàng', href: '/nganh-hang' },
  { label: 'Bảng giá', href: '/bang-gia' },
  { label: 'Khách hàng', href: '/khach-hang' },
  { label: 'Hỗ trợ', href: '/ho-tro' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="container-content">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
            <img src="/logo-posso.png" alt="Posso" className="h-11 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dang-nhap" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors no-underline">
              Đăng nhập
            </Link>
            <Link href="/dang-ky" className="btn btn-primary btn-sm">
              Dùng thử miễn phí
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="container-content py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
              <Link href="/dang-nhap" className="px-3 py-2.5 text-sm font-medium text-slate-600 no-underline">
                Đăng nhập
              </Link>
              <Link href="/dang-ky" className="btn btn-primary w-full justify-center">
                Dùng thử miễn phí
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
