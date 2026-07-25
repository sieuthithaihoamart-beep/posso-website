'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { faqs } from '@/lib/data/faqs'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="section bg-white">
      <div className="container-content">
        <SectionHeader
          badge="Câu hỏi thường gặp"
          title="Bạn đang thắc mắc điều gì?"
          subtitle="Những câu hỏi phổ biến nhất từ chủ cửa hàng trước khi bắt đầu dùng Posso."
        />

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-slate-100">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="font-semibold text-slate-800 text-sm md:text-base">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={cn('flex-shrink-0 text-slate-400 transition-transform duration-200', open === faq.id && 'rotate-180')}
                />
              </button>
              {open === faq.id && (
                <p className="pb-5 text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
