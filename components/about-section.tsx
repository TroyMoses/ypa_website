import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="pt-8 md:pt-15 pb-5 md:pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-6">
          <div>
            <p className="text-primary font-medium mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              About Youth Platform Africa
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              YPA is a dynamic organization committed to empowering individuals
              and driving positive change throughout the African continent. Our
              innovative initiatives span a wide range of sectors, including;
            </p>
            <ul className="space-y-4 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">
                  Agri-business
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">
                  Technology
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">
                  Entrepreneurship
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mb-2 leading-relaxed">
              Our primary objective is to provide young Africans with
              opportunities to flourish and create lasting impacts within their
              communities
            </p>
            <div className="flex gap-4">
              {/* Link to about us page */}
              <Link href="/about">
                <Button className="cursor-pointer">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/about.png"
              alt="YPA Services"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
