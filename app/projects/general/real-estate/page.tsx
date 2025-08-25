import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function RealEstatePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                YPA Real Estate Project
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Building affordable housing solutions and creating real estate
                investment opportunities for African youth. Transforming
                communities through sustainable property development and
                homeownership programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Properties
                </Button>
                <Button size="lg" variant="outline">
                  Investment Options
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/modern-affordable-housing-development-in-africa.png"
                alt="Real estate project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Affordable housing development</li>
                  <li>• Property investment consulting</li>
                  <li>• Land acquisition services</li>
                  <li>• Construction management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15-25% annual returns</li>
                  <li>• Flexible payment plans</li>
                  <li>• Property appreciation</li>
                  <li>• Rental income potential</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Property Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Residential apartments</li>
                  <li>• Commercial spaces</li>
                  <li>• Mixed-use developments</li>
                  <li>• Land plots</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-12">
            Project Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Units Developed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200</div>
              <div className="text-gray-600">Families Housed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300</div>
              <div className="text-gray-600">Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$15M</div>
              <div className="text-gray-600">Total Investment</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
