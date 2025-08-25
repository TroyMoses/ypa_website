import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold font-serif text-primary cursor-pointer">
              YPA
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary cursor-pointer">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary cursor-pointer">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-primary cursor-pointer">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary cursor-pointer">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Join */}
          <div>
            <h3 className="font-semibold mb-4">Join</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our newsletter to stay informed about our latest initiatives.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="text-sm" />
              <Button size="sm" className="cursor-pointer">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>© 2025 Youth Platform Africa. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-primary cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary cursor-pointer">
                Terms of Use
              </Link>
              <Link href="/cookies" className="hover:text-primary cursor-pointer">
                Cookie Policy
              </Link>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
