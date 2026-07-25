'use client'

import { useState } from 'react'
import StepProgress from './StepProgress'
import StepInfo from './StepInfo'
import StepIndustry from './StepIndustry'
import StepStore from './StepStore'
import type { PersonalInfo, StoreInfo, RegistrationData } from '@/types'

const STEPS = [
  { label: 'Thông tin', description: 'Họ tên & số điện thoại' },
  { label: 'Ngành hàng', description: 'Loại cửa hàng' },
  { label: 'Cửa hàng', description: 'Tên và địa chỉ' },
]

export default function RegistrationWizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<Partial<RegistrationData>>({})
  const [loading, setLoading] = useState(false)

  const handleStepInfo = (info: PersonalInfo) => {
    setData((prev) => ({ ...prev, personal: info }))
    setStep(2)
  }

  const handleStepIndustry = (industrySlug: string) => {
    setData((prev) => ({ ...prev, industry: industrySlug }))
    setStep(3)
  }

  const handleStepStore = async (store: StoreInfo) => {
    const final = { ...data, store } as RegistrationData
    setLoading(true)
    // TODO: call API POST /api/register
    await new Promise((r) => setTimeout(r, 1200))
    // Redirect to subdomain
    window.location.href = `https://${store.storeSlug}.posso.vn/setup`
  }

  return (
    <div className="max-w-lg mx-auto">
      <StepProgress currentStep={step} totalSteps={3} steps={STEPS} />

      <div className="mt-8 bg-white rounded-2xl shadow-card border border-slate-100 p-8">
        {step === 1 && (
          <StepInfo onNext={handleStepInfo} defaultValues={data.personal} />
        )}
        {step === 2 && (
          <StepIndustry
            onNext={handleStepIndustry}
            onBack={() => setStep(1)}
            selected={data.industry}
          />
        )}
        {step === 3 && (
          <StepStore
            onSubmit={handleStepStore}
            onBack={() => setStep(2)}
            loading={loading}
            industrySlug={data.industry || ''}
            defaultValues={data.store}
          />
        )}
      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        Đã có tài khoản?{' '}
        <a href="/dang-nhap" className="text-primary-600 hover:underline">Đăng nhập</a>
      </p>
    </div>
  )
}
