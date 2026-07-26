import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://posso.vn'),
  title: {
    default: 'POSSO - Phần Mềm Quản Lý Bán Hàng',
    template: '%s | Posso',
  },
  description: 'Posso giúp hơn 5.000 cửa hàng bán lẻ Việt Nam quản lý bán hàng, kho, nhân viên và báo cáo — dễ dùng, giá minh bạch, dùng thử miễn phí.',
  keywords: ['phần mềm quản lý bán hàng', 'pos việt nam', 'quản lý cửa hàng', 'posso'],
  openGraph: {
    siteName: 'Posso',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@posso_vn' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
