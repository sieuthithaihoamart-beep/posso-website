import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { industries } from './data/industries'
import type { Industry } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}

export function formatPrice(amount: number, currency = 'VND'): string {
  if (amount === 0) return 'Miễn phí'
  if (currency === 'VND') {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ'
  }
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency }).format(amount)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export const RESERVED_SLUGS = new Set([
  'www', 'api', 'app', 'admin', 'posso', 'mail', 'smtp', 'ftp', 'dev',
  'staging', 'beta', 'alpha', 'test', 'demo', 'support', 'help', 'docs',
  'blog', 'news', 'about', 'contact', 'login', 'logout', 'register',
  'signup', 'dashboard', 'billing', 'settings', 'static', 'cdn', 'assets',
  'media', 'img', 'images', 'video', 'files', 'upload', 'download',
  'webhook', 'oauth', 'auth', 'sso', 'status', 'health', 'metrics',
  'sandbox', 'v1', 'v2', 'v3', 'prod', 'production',
])

export function isValidSlug(slug: string): boolean {
  if (RESERVED_SLUGS.has(slug)) return false
  return /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/.test(slug)
}
