'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import StepProgress from './StepProgress'
import StepInfo from './StepInfo'
import StepStore from './StepStore'
import { registerStore } from '@/lib/api/auth'
import type {
  PersonalInfo,
  StoreInfo,
  RegistrationData,
  RegisteredUser,
} from '@/types'

const STEPS = [
  { label: 'Tài khoản', description: 'Thông tin quản trị' },
  { label: 'Cửa hàng', description: 'Tên cửa hàng' },
]

export default function RegistrationWizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<Partial<RegistrationData>>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [registeredUser, setRegisteredUser] = useState<RegisteredUser | null>(null)

  const handleStepInfo = (info: PersonalInfo) => {
    setData((prev) => ({ ...prev, personal: info }))
    setStep(2)
  }

  const handleStepStore = async (store: StoreInfo) => {
    if (!data.personal || loading) return

    const { fullName, username, password, phone, email } = data.personal
    setSubmitError('')
    setLoading(true)

    try {
      const result = await registerStore({
        storeName: store.storeName.trim(),
        username: username.trim().toUpperCase(),
        password,
        name: fullName.trim(),
        phone: phone.replace(/\s/g, '') || undefined,
        email: email.trim() || undefined,
      })

      localStorage.setItem('accessToken', result.data.token)
      localStorage.setItem('authUser', JSON.stringify(result.data.user))
      // Remove the plaintext password from component state after registration.
      setData({ store })
      setRegisteredUser(result.data.user)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Đăng ký không thành công. Vui lòng thử lại.',
      )
    } finally {
      setLoading(false)
    }
  }

  if (registeredUser) {
    return (
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-card border border-slate-100 p-8 text-center">
        <CheckCircle2 size={48} className="mx-auto text-green-500 mb-4" />
        <h2 className="text-xl font-bold font-display text-slate-900 mb-2">
          Đăng ký thành công
        </h2>
        <p className="text-sm text-slate-500">
          Cửa hàng <strong className="text-slate-700">{registeredUser.storeName}</strong> đã
          được tạo. Phiên đăng nhập của bạn đã sẵn sàng.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto">
      <StepProgress currentStep={step} totalSteps={2} steps={STEPS} />

      <div className="mt-8 bg-white rounded-2xl shadow-card border border-slate-100 p-8">
        {step === 1 && (
          <StepInfo onNext={handleStepInfo} defaultValues={data.personal} />
        )}
        {step === 2 && (
          <StepStore
            onSubmit={handleStepStore}
            onBack={() => setStep(1)}
            loading={loading}
            submitError={submitError}
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
