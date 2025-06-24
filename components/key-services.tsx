"use client"

import { useEffect, useRef, useState } from "react"
import { Plane, MapPin, Users, Award } from "lucide-react"
import Image from "next/image"

export function KeyServices() {
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

  const services = [
    {
      icon: Plane,
      title: "Global Passenger Travel",
      description:
        "Passenger air travel across global destinations, connecting continents with unmatched service and reliability.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Global Destinations", "Modern Fleet", "Expert Navigation", "Seamless Connections"],
    },
    {
      icon: Users,
      title: "Premium Class Experiences",
      description:
        "Business and economy class experiences defined by comfort and service, tailored to every traveler's needs.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Business Class Luxury", "Economy Comfort", "Personalized Service", "Enhanced Amenities"],
    },
    {
      icon: Award,
      title: "Expert Flight Operations",
      description:
        "Skilled flight crew trained for the most challenging conditions, ensuring safety and mastery with every flight.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Expert Pilots", "Trained Crew", "Safety Excellence", "Professional Standards"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Aviation Services & Solutions
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Passenger air travel across global destinations with experiences defined by comfort, service, and the
            hallmark of Amaraa hospitality.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bodoni text-3xl font-bold text-foreground">{service.title}</h3>
                </div>

                <p className="font-montserrat text-muted-foreground mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span className="font-montserrat text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
