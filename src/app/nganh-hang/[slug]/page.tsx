import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { industries, getIndustryBySlug } from '@/lib/data/industries'
import CTABanner from '@/components/home/CTABanner'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords?.join(', '),
    alternates: { canonical: `https://posso.vn/nganh-hang/${slug}` },
  }
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  const related = industries.filter((i) => i.slug !== slug).slice(0, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container-content py-3">
          <nav className="flex items-center gap-2 text-sm text-black">
            <Link href="/" className="hover:text-primary-600 no-underline">Trang chủ</Link>
            <ChevronRight size={14} />
            <Link href="/nganh-hang" className="hover:text-primary-600 no-underline">Ngành hàng</Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 font-medium">{industry.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className={`py-16 lg:py-24 ${industry.bgClass}`}>
        <div className="container-content">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border text-sm font-medium mb-6 ${industry.colorClass}`}>
              <span className="text-2xl">{industry.emoji}</span>
              {industry.name}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-5 leading-tight">
              {industry.headline}
            </h1>
            <p className="text-lg text-black leading-relaxed mb-8 max-w-2xl">
              {industry.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dang-ky" className="btn btn-primary btn-lg">
                Dùng thử miễn phí
                <ArrowRight size={18} />
              </Link>
              <Link href="/bang-gia" className="btn btn-secondary btn-lg">
                Xem bảng giá
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain point */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3 block">Bài toán của bạn</span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4 leading-tight">
                Những khó khăn thường gặp khi quản lý {industry.name.toLowerCase()}
              </h2>
              <p className="text-black leading-relaxed">
                {industry.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Posso giải quyết với:</h3>
              <ul className="flex flex-col gap-3">
                {industry.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-black">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="section bg-slate-50">
        <div className="container-content">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Ngành hàng liên quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/nganh-hang/${r.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all no-underline"
              >
                <span className="text-2xl">{r.emoji}</span>
                <span className="text-sm font-medium text-black leading-tight">{r.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
