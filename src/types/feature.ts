export type FeatureCategory = 'sales' | 'inventory' | 'reporting' | 'customers' | 'staff' | 'integrations'

export interface Feature {
  id: string
  name: string
  shortDescription: string
  description: string
  emoji: string
  category: FeatureCategory
  details: string[]
  badge?: string
  order?: number
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  store: string
  industry: string
  avatar?: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  order?: number
}

export interface PersonalInfo {
  fullName: string
  username: string
  password: string
  phone: string
  email: string
}

export interface StoreInfo {
  storeName: string
}

export interface RegistrationData {
  personal: PersonalInfo
  store: StoreInfo
}

export interface RegisterRequest {
  storeName: string
  username: string
  password: string
  name: string
  phone?: string
  email?: string
}

export interface RegisteredUser {
  id: string
  name: string
  role: string
  storeId: string
  storeName: string
  branchId: string
}

export interface RegisterResponse {
  success: true
  message: string
  data: {
    token: string
    user: RegisteredUser
  }
}
