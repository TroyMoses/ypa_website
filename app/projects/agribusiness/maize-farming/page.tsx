import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MaizeFarmingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                The Mighty YPA Maize Farming Project
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Revolutionizing maize production across Africa through modern
                farming techniques, quality seeds, and sustainable practices.
                Building food security one farm at a time.
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
                src="/modern-maize-farming-in-africa-with-young-farmers.png"
                alt="Maize farming project"
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
                  <li>• Train 1000+ farmers</li>
                  <li>• Distribute quality seeds</li>
                  <li>• Increase yield by 300%</li>
                  <li>• Establish market linkages</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Higher crop yields</li>
                  <li>• Improved food security</li>
                  <li>• Increased farm income</li>
                  <li>• Sustainable practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Modern farming techniques</li>
                  <li>• Soil management</li>
                  <li>• Pest control</li>
                  <li>• Post-harvest handling</li>
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
              <div className="text-4xl font-bold text-green-600 mb-2">800+</div>
              <div className="text-gray-600">Farmers Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                5,000
              </div>
              <div className="text-gray-600">Hectares Cultivated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                15,000
              </div>
              <div className="text-gray-600">Tons Produced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                $2.5M
              </div>
              <div className="text-gray-600">Income Generated</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
