import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { KeyServices } from "@/components/key-services"
import { FeaturedServices } from "@/components/featured-services"
import { ProductHighlights } from "@/components/product-highlights"
import { NewsUpdates } from "@/components/news-updates"
import { QuickLinks } from "@/components/quick-links"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Hero />
        <Overview />
        <KeyServices />
        <FeaturedServices />
        <ProductHighlights />
        <NewsUpdates />
        <QuickLinks />
      </div>
      <Footer />
    </main>

  )
}
