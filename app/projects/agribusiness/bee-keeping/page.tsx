import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BeekeepingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                The Mighty YPA Bee Keeping Project
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empowering African youth through sustainable beekeeping
                practices that generate income while preserving our environment.
                Join our mission to create thriving bee colonies across the
                continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  Join This Project
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/african-beekeepers-working-with-modern-hives.png"
                alt="Beekeeping project"
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
                  <li>• Train 500+ youth in beekeeping</li>
                  <li>• Establish 100 bee colonies</li>
                  <li>• Generate sustainable income</li>
                  <li>• Promote environmental conservation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Monthly income of $200-500</li>
                  <li>• Honey production & sales</li>
                  <li>• Beeswax products</li>
                  <li>• Pollination services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hive management</li>
                  <li>• Honey harvesting</li>
                  <li>• Disease prevention</li>
                  <li>• Marketing strategies</li>
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
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                250+
              </div>
              <div className="text-gray-600">Youth Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">50</div>
              <div className="text-gray-600">Active Colonies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                2,500kg
              </div>
              <div className="text-gray-600">Honey Produced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                $125K
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
