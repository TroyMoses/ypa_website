"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold font-serif text-primary cursor-pointer"
            >
              YPA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
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
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("projects")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer flex items-center">
                  YPA Projects
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {activeDropdown === "projects" && (
                  <div className="absolute left-0 mt-[2px] w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {/* Agribusiness Projects */}
                      <div className="group relative">
                        <div className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                          Agribusiness Projects
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </div>
                        <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="py-2">
                            <Link
                              href="/projects/agribusiness/bee-keeping"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Bee Keeping
                            </Link>
                            <Link
                              href="/projects/agribusiness/maize-farming"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Maize Farming
                            </Link>
                            <Link
                              href="/projects/agribusiness/goat-keeping"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Goat Keeping
                            </Link>
                            <Link
                              href="/projects/agribusiness/pasture-growing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Pasture Growing
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* General Projects */}
                      <div className="group relative">
                        <div className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                          General Projects
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </div>
                        <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="py-2">
                            <Link
                              href="/projects/general/real-estate"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Real Estate
                            </Link>
                            <Link
                              href="/projects/general/prudential-life-insurance"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Prudential Life Insurance
                            </Link>
                            <Link
                              href="/projects/general/planned-kids-project"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              Planned Kids Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer bg-transparent"
            >
              Learn
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 cursor-pointer"
            >
              Start
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
              <div>
                <button
                  onClick={() => toggleMobileDropdown("projects")}
                  className="text-gray-900 hover:text-primary px-3 py-2 text-base font-medium cursor-pointer w-full text-left flex items-center justify-between"
                >
                  YPA Projects
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileDropdowns.projects ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdowns.projects && (
                  <div className="pl-6 space-y-1">
                    {/* Agribusiness Projects Mobile */}
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown("agribusiness")}
                        className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer w-full text-left flex items-center justify-between"
                      >
                        Agribusiness Projects
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileDropdowns.agribusiness ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileDropdowns.agribusiness && (
                        <div className="pl-6 space-y-1">
                          <Link
                            href="/projects/agribusiness/bee-keeping"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Bee Keeping
                          </Link>
                          <Link
                            href="/projects/agribusiness/maize-farming"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Maize Farming
                          </Link>
                          <Link
                            href="/projects/agribusiness/goat-keeping"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Goat Keeping
                          </Link>
                          <Link
                            href="/projects/agribusiness/pasture-growing"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Pasture Growing
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* General Projects Mobile */}
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown("general")}
                        className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer w-full text-left flex items-center justify-between"
                      >
                        General Projects
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileDropdowns.general ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileDropdowns.general && (
                        <div className="pl-6 space-y-1">
                          <Link
                            href="/projects/general/real-estate"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Real Estate
                          </Link>
                          <Link
                            href="/projects/general/prudential-life-insurance"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Prudential Life Insurance
                          </Link>
                          <Link
                            href="/projects/general/planned-kids-project"
                            className="text-gray-600 hover:text-primary block px-3 py-2 text-sm cursor-pointer"
                          >
                            Planned Kids Project
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
