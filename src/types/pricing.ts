export type BillingCycle = 'monthly' | 'yearly'

export interface PricingFeatureItem {
  label: string
  included: boolean | string
  highlight?: boolean
  tooltip?: string
}

export interface PricingLimits {
  products: number | 'unlimited'
  branches: number | 'unlimited'
  staff: number | 'unlimited'
  storage: string
  support: string
}

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  price: {
    monthly: number
    yearly: number
    currency: 'VND'
  }
  trialDays: number
  limits: PricingLimits
  features: PricingFeatureItem[]
  highlighted: boolean
  badge?: string
  cta: string
  ctaHref: string
  color: string
  popular?: boolean
}
