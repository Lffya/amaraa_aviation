"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Globe, Shield, Users } from "lucide-react"

export function Overview() {
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

  const values = [
    {
      icon: Award,
      title: "Ambition",
      description: "Driving forward with bold vision and determination to reach new heights",
    },
    {
      icon: Globe,
      title: "Transformation",
      description: "Continuously evolving to redefine the aviation experience",
    },
    {
      icon: Shield,
      title: "Comfort & Safety",
      description: "Uncompromising commitment to passenger wellbeing and security",
    },
    {
      icon: Users,
      title: "Excellence in Service",
      description: "Delivering exceptional experiences that exceed expectations",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Vision, Mission & Values
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <div className="text-center">
              <h3 className="font-bodoni text-2xl font-bold text-primary mb-3">Vision</h3>
              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
                To carry the hopes of travelers across continents with unmatched comfort, safety, and service.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bodoni text-2xl font-bold text-primary mb-3">Mission</h3>
              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
                Transform dreams into reality through aviation that redefines expectations.
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center p-6 rounded-lg bg-background shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bodoni text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="font-montserrat text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
