"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function ProductHighlights() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      title: "A Sanctuary in the Skies",
      description:
        "Every flight is a narrative of excellence, comfort, and care, where passengers experience true hospitality above the clouds.",
      image: "/placeholder.svg?height=400&width=600",
      specs: ["Luxurious Interiors", "Comfort-First Design", "Premium Materials", "Thoughtful Details"],
    },
    {
      title: "Excellence in Every Journey",
      description:
        "Amaraa Airlines elevates each journey through meticulous attention to detail and unwavering commitment to passenger satisfaction.",
      image: "/placeholder.svg?height=400&width=600",
      specs: ["Personalized Service", "Quality Assurance", "Attention to Detail", "Passenger-Centric"],
    },
    {
      title: "Committed Crew Excellence",
      description:
        "Pilots and crew committed to delivering luxury with every takeoff, ensuring each flight exceeds expectations.",
      image: "/placeholder.svg?height=400&width=600",
      specs: ["Expert Training", "Service Excellence", "Safety First", "Professional Dedication"],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-foreground mb-6">Aviation Excellence</h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Every flight is a narrative of excellence, comfort, and care. A sanctuary in the skies where Amaraa Airlines
            elevates each journey.
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={product.title} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-secondary/20">
                      <h3 className="font-bodoni text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {product.title}
                      </h3>
                      <p className="font-montserrat text-lg text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {product.specs.map((spec) => (
                          <div key={spec} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            <span className="font-montserrat text-sm text-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat w-fit">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
