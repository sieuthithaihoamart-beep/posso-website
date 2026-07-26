import type {
  AuthStore,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  SessionResponse,
  StoresResponse,
} from '@/types'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://api.posso.vn')

interface ApiErrorBody {
  success?: false
  code?: string
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

export class AuthApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly code?: string,
  ) {
    super(message)
    this.name = 'AuthApiError'
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

export async function getStoresByUsername(
  username: string,
  signal?: AbortSignal,
): Promise<AuthStore[]> {
  const url = new URL(`${API_BASE_URL}/api/auth/stores`)
  url.searchParams.set('username', username.trim())

  let response: Response

  try {
    response = await fetch(url, { signal })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') throw error
    throw new AuthApiError(
      'Không thể tải danh sách cửa hàng. Vui lòng kiểm tra kết nối.',
    )
  }

  let result: StoresResponse | ApiErrorBody

  try {
    result = (await response.json()) as StoresResponse | ApiErrorBody
  } catch {
    throw new AuthApiError(
      'Máy chủ trả về danh sách cửa hàng không hợp lệ.',
      response.status,
    )
  }

  if (!response.ok || !result.success) {
    throw new AuthApiError(
      result.message || 'Không thể tải danh sách cửa hàng.',
      response.status,
    )
  }

  if (!Array.isArray(result.data)) {
    throw new AuthApiError(
      'Phản hồi danh sách cửa hàng không đúng định dạng.',
      response.status,
    )
  }

  return result.data
}

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  let response: Response

  try {
    response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new AuthApiError(
      'Không thể kết nối tới máy chủ. Vui lòng kiểm tra kết nối và thử lại.',
    )
  }

  let result: LoginResponse | ApiErrorBody

  try {
    result = (await response.json()) as LoginResponse | ApiErrorBody
  } catch {
    throw new AuthApiError(
      'Máy chủ trả về dữ liệu đăng nhập không hợp lệ.',
      response.status,
    )
  }

  if (!response.ok || !result.success) {
    throw new AuthApiError(
      result.message || 'Đăng nhập không thành công. Vui lòng thử lại.',
      response.status,
      'code' in result ? result.code : undefined,
    )
  }

  if (!result.data?.user?.storeSlug) {
    throw new AuthApiError(
      'Phản hồi đăng nhập thiếu thông tin cửa hàng.',
      response.status,
    )
  }

  return result
}

export async function getCurrentSession(): Promise<SessionResponse> {
  let response: Response

  try {
    response = await fetch(`${API_BASE_URL}/api/auth/me`, {
      credentials: 'include',
      cache: 'no-store',
    })
  } catch {
    throw new AuthApiError(
      'Không thể kiểm tra phiên đăng nhập. Vui lòng kiểm tra kết nối.',
    )
  }

  let result: SessionResponse | ApiErrorBody

  try {
    result = (await response.json()) as SessionResponse | ApiErrorBody
  } catch {
    throw new AuthApiError(
      'Máy chủ trả về dữ liệu phiên đăng nhập không hợp lệ.',
      response.status,
    )
  }

  if (!response.ok || !result.success) {
    throw new AuthApiError(
      result.message || 'Không thể kiểm tra phiên đăng nhập.',
      response.status,
      'code' in result ? result.code : undefined,
    )
  }

  if (!result.data?.user?.storeSlug) {
    throw new AuthApiError(
      'Phản hồi phiên đăng nhập thiếu thông tin cửa hàng.',
      response.status,
    )
  }

  return result
}
