import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">About Youth Platform Africa</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading Pan-African agribusiness organization committed to empowering individuals and driving sustainable
            change across the continent.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-serif mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower youth across Africa through innovative agribusiness solutions, fostering sustainable
                  practices that drive economic growth, food security, and community development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-serif mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A thriving Africa where young people lead sustainable agricultural transformation, creating prosperity
                  for communities while preserving our environment for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to transform African agriculture, Youth Platform Africa began as a grassroots
                initiative in Uganda. Today, we've grown into a continental movement, empowering thousands of young
                farmers and entrepreneurs across East Africa.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey started with the recognition that Africa's agricultural potential could only be unlocked
                through the energy, innovation, and dedication of its youth. We provide the tools, training, and support
                systems necessary for young people to succeed in agribusiness.
              </p>
              <Button className="cursor-pointer">Learn More About Our Impact</Button>
            </div>
            <div>
              <Image
                src="/african-agriculture-story.png"
                alt="Our story in African agriculture"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to empowering African youth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold font-serif mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We promote practices that protect our environment while ensuring long-term agricultural productivity.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold font-serif mb-3">Empowerment</h3>
                <p className="text-gray-600">
                  We believe in equipping young people with the knowledge, skills, and resources they need to succeed.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold font-serif mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and approaches that can transform African agriculture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
