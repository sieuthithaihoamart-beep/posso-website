'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { industries } from '@/lib/data/industries'
import { cn } from '@/lib/utils'

interface Props {
  onNext: (industrySlug: string) => void
  onBack: () => void
  selected?: string
}

export default function StepIndustry({ onNext, onBack, selected }: Props) {
  const [picked, setPicked] = useState(selected || '')

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold font-display text-slate-900 mb-1">Ngành kinh doanh</h2>
        <p className="text-sm text-slate-500">Chọn ngành phù hợp để Posso gợi ý tính năng tốt nhất cho cửa hàng bạn.</p>
      </div>

      <div className="grid grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
        {industries.map((ind) => (
          <button
            key={ind.slug}
            type="button"
            onClick={() => setPicked(ind.slug)}
            className={cn(
              'flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all',
              picked === ind.slug
                ? 'border-primary-500 bg-primary-50 shadow-sm'
                : 'border-slate-100 bg-white hover:border-slate-200'
            )}
          >
            <span className="text-2xl">{ind.emoji}</span>
            <span className={cn('text-xs font-medium leading-tight', picked === ind.slug ? 'text-primary-700' : 'text-slate-600')}>
              {ind.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className="btn btn-secondary flex-1 justify-center">
          <ArrowLeft size={16} />
          Quay lại
        </button>
        <button
          type="button"
          onClick={() => picked && onNext(picked)}
          disabled={!picked}
          className="btn btn-primary flex-1 justify-center"
        >
          Tiếp theo
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
