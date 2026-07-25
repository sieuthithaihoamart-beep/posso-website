import type { RegisterRequest, RegisterResponse } from '@/types'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://api.posso.vn')

interface ApiErrorBody {
  success?: false
  message?: string
}

export class RegisterApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message)
    this.name = 'RegisterApiError'
  }
}

export async function registerStore(
  payload: RegisterRequest,
): Promise<RegisterResponse> {
  let response: Response

  try {
    response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new RegisterApiError(
      'Không thể kết nối tới máy chủ. Vui lòng kiểm tra kết nối và thử lại.',
    )
  }

  let result: RegisterResponse | ApiErrorBody

  try {
    result = (await response.json()) as RegisterResponse | ApiErrorBody
  } catch {
    throw new RegisterApiError(
      'Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại sau.',
      response.status,
    )
  }

  if (!response.ok || !result.success) {
    throw new RegisterApiError(
      result.message || 'Đăng ký không thành công. Vui lòng thử lại.',
      response.status,
    )
  }

  if (!result.data?.token || !result.data.user) {
    throw new RegisterApiError(
      'Phản hồi đăng ký thiếu thông tin phiên đăng nhập.',
      response.status,
    )
  }

  return result
}
