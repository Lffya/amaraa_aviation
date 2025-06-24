"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Aviation background"
          fill
          className="object-cover opacity-10 dark:opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Welcome to <span className="text-primary">Amaraa</span> <span className="block">Aviation Group</span>
          </h1>

          <p className="font-montserrat text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
            A part of <span className="text-primary font-semibold">Amaraa Holding</span> — a symbol of ambition,
            transformation, and unwavering pursuit of excellence.
          </p>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed italic">
            To carry the hopes of travelers across continents with unmatched comfort, safety, and service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-3"
            >
              Learn More About Amaraa Airlines
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-montserrat font-semibold px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              About Amaraa Holding
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
