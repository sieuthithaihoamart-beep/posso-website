import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { posts } from '@/lib/data/posts'
import Link from 'next/link'
import SectionHeader from '@/components/shared/SectionHeader'

export const metadata: Metadata = buildMetadata({
  path: '/tin-tuc',
  title: 'Tin tức & Kiến thức kinh doanh | Posso',
  description: 'Cập nhật tính năng mới, tips quản lý cửa hàng, kiến thức bán hàng dành cho chủ cửa hàng Việt.',
})

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <main>
      <section className="section bg-hero">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">Tin tức &amp; Kiến thức</h1>
          <p className="text-lg text-slate-600">Tips quản lý cửa hàng, cập nhật tính năng mới và câu chuyện từ cộng đồng Posso.</p>
        </div>
      </section>

      {/* Featured */}
      <section className="section border-b border-slate-100">
        <div className="container-content">
          <Link href={`/tin-tuc/${featured.slug}`} className="grid md:grid-cols-2 gap-8 items-center group no-underline">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl aspect-video flex items-center justify-center text-7xl">
              {featured.emoji}
            </div>
            <div>
              <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">{featured.category}</span>
              <h2 className="text-2xl font-bold font-display text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-snug">{featured.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.readTime} đọc</span>
                <span>·</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="section">
        <div className="container-content">
          <SectionHeader badge="Mới nhất" title="Tất cả bài viết" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((post) => (
              <Link key={post.slug} href={`/tin-tuc/${post.slug}`} className="card flex flex-col no-underline group hover:shadow-card-hover transition-shadow">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 aspect-video flex items-center justify-center text-5xl">
                  {post.emoji}
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-xs font-semibold text-primary-600">{post.category}</span>
                  <h3 className="font-bold font-display text-slate-900 leading-snug group-hover:text-primary-600 transition-colors">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt.slice(0, 100)}…</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-50">
                    <span>{post.readTime} đọc</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
