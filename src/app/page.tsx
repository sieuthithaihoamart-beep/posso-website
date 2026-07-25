import HeroSection from '@/components/home/HeroSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import IndustriesGrid from '@/components/home/IndustriesGrid'
import PricingPreview from '@/components/home/PricingPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <IndustriesGrid limit={12} showViewAll />
      <PricingPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  )
}
