import { Metadata } from 'next'
import Link from 'next/link'
import LoginForm from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Đăng nhập | Posso',
  description: 'Đăng nhập vào hệ thống quản lý cửa hàng Posso của bạn.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-hero flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center no-underline mb-4">
            <img src="/logo-posso.png" alt="Posso" className="h-14 w-auto object-contain" />
          </Link>
          <h1 className="text-2xl font-bold font-display text-slate-900">Đăng nhập</h1>
          <p className="text-black mt-1 text-sm">
            Chào mừng trở lại! Nhập thông tin tài khoản để tiếp tục.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
          <LoginForm />
        </div>

        <p className="text-center text-sm text-black mt-6">
          Chưa có tài khoản?{' '}
          <Link href="/dang-ky" className="text-primary-600 font-medium hover:underline">
            Đăng ký miễn phí
          </Link>
        </p>
      </div>
    </div>
  )
}
