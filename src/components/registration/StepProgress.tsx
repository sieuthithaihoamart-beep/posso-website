import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step { label: string; description?: string }
interface Props { currentStep: number; totalSteps: number; steps: Step[] }

export default function StepProgress({ currentStep, totalSteps, steps }: Props) {
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((step, i) => {
        const num = i + 1
        const done = num < currentStep
        const active = num === currentStep

        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div className={cn('step-dot', active ? 'step-dot-active' : done ? 'step-dot-done' : 'step-dot-pending')}>
                {done ? <Check size={14} /> : num}
              </div>
              <div className="text-center hidden sm:block">
                <p className={cn('text-xs font-semibold', active ? 'text-primary-600' : done ? 'text-slate-600' : 'text-slate-400')}>
                  {step.label}
                </p>
              </div>
            </div>
            {i < totalSteps - 1 && (
              <div className={cn('h-0.5 w-16 sm:w-24 mx-2 mb-6', done ? 'bg-primary-300' : 'bg-slate-200')} />
            )}
          </div>
        )
      })}
    </div>
  )
}
