import type { Metadata } from 'next'
import RegistrationWizard from '@/components/registration/RegistrationWizard'

export const metadata: Metadata = {
  title: 'Tạo cửa hàng miễn phí',
  description: 'Đăng ký Posso miễn phí trong 2 phút. Không cần thẻ tín dụng, không cần cài phần mềm.',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container-content">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-2">
            Tạo cửa hàng của bạn
          </h1>
          <p className="text-slate-500">Miễn phí · Không cần thẻ tín dụng · Bắt đầu trong 2 phút</p>
        </div>
        <RegistrationWizard />
      </div>
    </div>
  )
}
