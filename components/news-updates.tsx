"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function NewsUpdates() {
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

  const news = [
    {
      title: "Continuing Expansion Under Amaraa Holding's Visionary Growth",
      description:
        "Amaraa Airlines continues its strategic expansion across global markets, strengthening our network and enhancing connectivity for travelers worldwide.",
      date: "2024-01-15",
      category: "Expansion",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      title: "Service Evolution to Meet Global Aviation Standards",
      description:
        "Ongoing enhancement of our service offerings to exceed international aviation standards and deliver unparalleled passenger experiences.",
      date: "2024-01-10",
      category: "Service Excellence",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Integration with Amaraa Technology for Digital Advancement",
      description:
        "Strategic partnership with Amaraa Technology to revolutionize the digital aviation experience and streamline operations.",
      date: "2024-01-05",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Recognition for Defining New Standards in Airline Service",
      description:
        "Industry recognition for our commitment to excellence and innovation in redefining airline comfort and service standards.",
      date: "2023-12-28",
      category: "Recognition",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-foreground mb-6">Latest News & Updates</h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our journey of transformation from ambition to excellence, as we continue expanding and evolving to
            meet global aviation standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative h-64 lg:h-80">
                <Image src={news[0].image || "/placeholder.svg"} alt={news[0].title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-montserrat">Featured</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-montserrat text-sm">
                      {new Date(news[0].date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-bodoni text-2xl font-bold mb-2">{news[0].title}</h3>
                  <p className="font-montserrat text-sm opacity-90">{news[0].description}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* News List */}
          <div className="space-y-6">
            {news.slice(1).map((article, index) => (
              <Card
                key={article.title}
                className={`hover:shadow-lg transition-all duration-500 cursor-pointer group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-montserrat text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="font-montserrat text-xs">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="font-bodoni text-lg font-bold group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-montserrat text-sm mb-3">{article.description}</CardDescription>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="font-montserrat text-sm font-medium mr-1">Read more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
