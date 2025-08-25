import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PastureGrowingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                The Mighty YPA Pasture Growing Project
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transforming degraded lands into productive pastures that
                support livestock farming and environmental restoration.
                Creating sustainable feed sources for thriving agricultural
                communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Join This Project
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/lush-green-pastures-with-cattle-grazing-in-africa.png"
                alt="Pasture growing project"
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
                <CardTitle>Project Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Restore 10,000 hectares</li>
                  <li>• Train 400+ farmers</li>
                  <li>• Establish seed banks</li>
                  <li>• Improve soil health</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Increased livestock productivity</li>
                  <li>• Soil erosion control</li>
                  <li>• Carbon sequestration</li>
                  <li>• Biodiversity conservation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pasture establishment</li>
                  <li>• Grass species selection</li>
                  <li>• Grazing management</li>
                  <li>• Land restoration</li>
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
              <div className="text-4xl font-bold text-green-600 mb-2">300+</div>
              <div className="text-gray-600">Farmers Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                7,500
              </div>
              <div className="text-gray-600">Hectares Restored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                50,000
              </div>
              <div className="text-gray-600">Tons CO2 Sequestered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                $1.2M
              </div>
              <div className="text-gray-600">Economic Value Added</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
