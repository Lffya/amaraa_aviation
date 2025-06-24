"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Shield, Users, Award } from "lucide-react"

export function FeaturedServices() {
  const [isVisible, setIsVisible] = useState(false)
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

  const featuredServices = [
    {
      icon: Star,
      title: "Business Class Journeys",
      description:
        "Smooth, luxurious travel that transforms your journey into an experience of comfort and sophistication.",
      price: "Premium Experience",
      popular: true,
    },
    {
      icon: Shield,
      title: "Economy Class Comfort",
      description: "A cozy and comforting environment that ensures every passenger feels valued and cared for.",
      price: "Accessible Luxury",
      popular: true,
    },
    {
      icon: Users,
      title: "Impeccable In-Flight Service",
      description: "Highly trained crew delivering hospitality in the skies — a hallmark of the Amaraa experience.",
      price: "Signature Service",
      popular: false,
    },
    {
      icon: Award,
      title: "Safety & Mastery",
      description: "Expert pilots committed to delivering luxury with every takeoff, ensuring safety and excellence.",
      price: "Peace of Mind",
      popular: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Services</h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the pinnacle of aviation excellence with our signature services designed for the discerning
            traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                service.popular ? "ring-2 ring-primary" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-montserrat font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-bodoni text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="font-montserrat">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="text-2xl font-bodoni font-bold text-primary mb-4">{service.price}</div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat"
                  variant={service.popular ? "default" : "outline"}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
