import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function GoatKeepingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                The Mighty YPA Goat Keeping Project
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empowering communities through sustainable goat farming that
                provides protein, income, and economic stability. Building
                resilient livelihoods across rural Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Join This Project
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/african-goat-farming-with-young-herders.png"
                alt="Goat keeping project"
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
                  <li>• Train 600+ youth in goat farming</li>
                  <li>• Distribute 2000+ goats</li>
                  <li>• Establish breeding programs</li>
                  <li>• Create market networks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Milk production</li>
                  <li>• Meat for protein</li>
                  <li>• Breeding income</li>
                  <li>• Manure for farming</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Animal husbandry</li>
                  <li>• Feeding practices</li>
                  <li>• Health management</li>
                  <li>• Business planning</li>
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
              <div className="text-4xl font-bold text-orange-600 mb-2">
                450+
              </div>
              <div className="text-gray-600">Youth Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                1,500
              </div>
              <div className="text-gray-600">Goats Distributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                3,000L
              </div>
              <div className="text-gray-600">Daily Milk Production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                $800K
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
