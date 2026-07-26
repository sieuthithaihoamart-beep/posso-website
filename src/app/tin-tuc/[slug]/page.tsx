import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/data/posts'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Posso`,
    description: post.excerpt,
  }
}

function renderMarkdown(text: string): string {
  return text
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold font-display text-slate-900 mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-slate-900 mt-6 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^---$/gm, '<hr class="border-slate-100 my-8" />')
    .replace(/^\| (.+) \|$/gm, (row) => {
      const cells = row.replace(/^\| | \|$/g, '').split(' | ')
      const isHeader = false
      return `<tr>${cells.map((c) => `<td class="border border-slate-200 px-3 py-2 text-sm">${c}</td>`).join('')}</tr>`
    })
    .replace(/(<tr>[\s\S]*?<\/tr>)/g, '<table class="w-full border-collapse my-4 text-sm">$1</table>')
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc text-black">$1</li>')
    .replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="my-3 flex flex-col gap-1">$1</ul>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-5 list-decimal text-black">$2</li>')
    .split('\n\n')
    .map((para) => {
      if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<ol') || para.startsWith('<hr') || para.startsWith('<table') || para.startsWith('<tr')) return para
      return `<p class="text-black leading-relaxed">${para}</p>`
    })
    .join('\n')
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const others = posts.filter((p) => p.slug !== post.slug && !related.find((r) => r.slug === p.slug)).slice(0, 2 - related.length)
  const suggestions = [...related, ...others].slice(0, 2)

  return (
    <main>
      <section className="section bg-hero border-b border-slate-100">
        <div className="container-content max-w-2xl mx-auto">
          <Link href="/tin-tuc" className="inline-flex items-center gap-1.5 text-sm text-black hover:text-primary-600 transition-colors mb-6 no-underline">
            <ArrowLeft size={14} />
            Quay lại tin tức
          </Link>
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="text-3xl font-bold font-display text-slate-900 leading-snug mb-4">{post.title}</h1>
          <p className="text-lg text-black leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-black">
            <span className="text-2xl">{post.emoji}</span>
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readTime} đọc</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-content max-w-2xl mx-auto">
          <article
            className="prose-posso flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </div>
      </section>

      {suggestions.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-content">
            <h2 className="text-xl font-bold font-display text-slate-900 mb-6">Bài viết liên quan</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {suggestions.map((p) => (
                <Link key={p.slug} href={`/tin-tuc/${p.slug}`} className="card p-5 no-underline group hover:shadow-card-hover transition-shadow">
                  <span className="text-3xl block mb-3">{p.emoji}</span>
                  <span className="text-xs font-semibold text-primary-600">{p.category}</span>
                  <h3 className="font-bold font-display text-slate-900 mt-1 leading-snug group-hover:text-primary-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-black mt-2">{p.readTime} đọc · {p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-primary-600">
        <div className="container-content text-center max-w-xl mx-auto">
          <p className="text-primary-100 text-sm mb-2">Dùng thử miễn phí 30 ngày</p>
          <h2 className="text-2xl font-bold text-white font-display mb-4">Posso — Quản lý cửa hàng dễ như dùng điện thoại</h2>
          <Link href="/dang-ky" className="btn bg-white text-primary-700 hover:bg-primary-50">Tạo cửa hàng miễn phí</Link>
        </div>
      </section>
    </main>
  )
}
