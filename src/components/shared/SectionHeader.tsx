import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  gradientTitle?: boolean
  className?: string
}

export default function SectionHeader({ badge, title, subtitle, align = 'center', gradientTitle, className }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-100">
          {badge}
        </span>
      )}
      <h2 className={cn('text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight', gradientTitle && 'text-gradient')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-black text-lg leading-relaxed', align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
