"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Newspaper, ArrowRight, Plane, Award } from "lucide-react"

export function QuickLinks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const quickLinks = [
    {
      icon: Plane,
      title: "Learn More About Amaraa Airlines",
      description: "Discover our story, fleet, and commitment to transforming aviation experiences.",
      action: "Explore Airlines",
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Explore Amaraa Holding",
      description: "Learn about our parent company and the network of subsidiaries driving innovation.",
      action: "Visit Holding",
      color: "bg-purple-500",
    },
    {
      icon: Award,
      title: "Company Vision & Values",
      description: "Access our comprehensive vision, mission, and the values that guide our journey.",
      action: "Our Values",
      color: "bg-green-500",
    },
    {
      icon: Newspaper,
      title: "Aviation Developments",
      description: "Read about our latest developments, achievements, and industry innovations.",
      action: "Read Updates",
      color: "bg-orange-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-foreground mb-6">Quick Links</h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our world of aviation excellence and discover how Amaraa Airlines is shaping the future of travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Card
              key={link.title}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-bodoni text-xl font-bold group-hover:text-primary transition-colors">
                  {link.title}
                </CardTitle>
                <CardDescription className="font-montserrat">{link.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all font-montserrat"
                >
                  {link.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
