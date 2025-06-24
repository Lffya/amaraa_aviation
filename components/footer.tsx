"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plane, Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        "Global Passenger Travel",
        "Business Class",
        "Economy Class",
        "In-Flight Service",
        "Expert Flight Operations",
      ],
    },
    {
      title: "Company",
      links: ["About Amaraa Airlines", "Vision & Mission", "Our Values", "Amaraa Holding", "Leadership Team"],
    },
    {
      title: "Connect",
      links: ["Contact Us", "Join Our Team", "Investor Relations", "News & Updates", "Press Releases"],
    },
    {
      title: "Experience",
      links: ["Book Your Journey", "Service Excellence", "Safety Standards", "Comfort & Care", "Aviation Innovation"],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Plane className="w-8 h-8 text-primary mr-3" />
              <span className="font-bodoni text-2xl font-bold text-foreground">Amaraa Aviation Group</span>
            </div>

            <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
              A part of Amaraa Holding — transforming dreams into reality through aviation that redefines expectations.
              Join our team of dreamers, doers, pilots, and crew as we shape the future of aviation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-primary mr-3" />
                <span className="font-montserrat text-sm text-muted-foreground">
                  Aviation Tower, Business District, Global City
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-3" />
                <span className="font-montserrat text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-3" />
                <span className="font-montserrat text-sm text-muted-foreground">info@amaraa-aviation.com</span>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="mt-6">
              <Button variant="outline" size="sm" className="font-montserrat">
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bodoni text-lg font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <p className="font-montserrat text-sm text-muted-foreground">
              © {currentYear} Amaraa Aviation Group. All rights reserved.
            </p>
            <p className="font-montserrat text-sm text-muted-foreground">A member of Amaraa Holding</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
