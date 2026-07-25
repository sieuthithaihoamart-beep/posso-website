import type { Metadata } from 'next'

const BASE_URL = 'https://posso.vn'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Posso — Phần mềm quản lý bán hàng cho 26 ngành',
    template: '%s | Posso',
  },
  description: 'Posso giúp hơn 5.000 cửa hàng bán lẻ Việt Nam quản lý bán hàng, kho, nhân viên và báo cáo — dễ dùng, giá minh bạch, dùng thử miễn phí.',
  keywords: ['phần mềm quản lý bán hàng', 'pos việt nam', 'quản lý cửa hàng', 'posso', 'phần mềm tính tiền'],
  openGraph: {
    siteName: 'Posso',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@posso_vn' },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
}

export function buildMetadata(overrides: Partial<Metadata> & { path: string }): Metadata {
  const { path, ...rest } = overrides
  return {
    ...rest,
    alternates: { canonical: `${BASE_URL}${path}` },
    openGraph: {
      url: `${BASE_URL}${path}`,
      siteName: 'Posso',
      locale: 'vi_VN',
      type: 'website',
      images: [{ url: '/og-default.png', width: 1200, height: 630 }],
      ...(rest.openGraph as object ?? {}),
    },
  }
}
