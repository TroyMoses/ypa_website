"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold font-serif text-primary cursor-pointer">
              YPA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer">
                Home Page
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Our Services
              </Link>
              <Link
                href="/news"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
                News & Events
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
              Learn
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 cursor-pointer">
              Start
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Home Page
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Our Services
              </Link>
              <Link
                href="/news"
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer"
              >
                News & Events
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Contact Us
              </Link>
              <div className="flex space-x-4 px-3 py-2">
                <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                  Learn
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 cursor-pointer">
                  Start
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
