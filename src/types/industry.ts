export interface IndustryTestimonial {
  quote: string
  author: string
  role?: string
  store: string
  avatar?: string
  rating?: number
}

export interface IndustryStat {
  label: string
  value: string
  description?: string
}

export interface Industry {
  slug: string
  name: string
  emoji: string
  headline: string
  shortDescription: string
  description: string
  colorClass: string
  bgClass: string
  features: string[]
  metaTitle: string
  metaDescription: string
  keywords?: string[]
  testimonial?: IndustryTestimonial
  stats?: IndustryStat[]
  relatedSlugs?: string[]
  order: number
}
