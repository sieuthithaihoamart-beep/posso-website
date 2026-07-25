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
  phone: string
  email: string
}

export interface StoreInfo {
  storeName: string
  storeSlug: string
  province: string
}

export interface RegistrationData {
  personal: PersonalInfo
  industry: string
  store: StoreInfo
}
