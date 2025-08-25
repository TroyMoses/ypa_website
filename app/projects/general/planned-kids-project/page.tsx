import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PlannedKidsProjectPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                YPA Planned Kids Project
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empowering families through comprehensive family planning
                education and child development programs. Building stronger
                communities by supporting planned parenthood and child welfare
                initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Join Program
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/happy-african-families-with-children-in-educationa.png"
                alt="Planned kids project"
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
                <CardTitle>Program Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Family planning education</li>
                  <li>• Child development programs</li>
                  <li>• Parenting workshops</li>
                  <li>• Health and nutrition</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Improved child outcomes</li>
                  <li>• Family stability</li>
                  <li>• Educational support</li>
                  <li>• Healthcare access</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Counseling services</li>
                  <li>• Educational workshops</li>
                  <li>• Resource provision</li>
                  <li>• Community support</li>
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
            Program Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">
                2,500+
              </div>
              <div className="text-gray-600">Families Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">8,000</div>
              <div className="text-gray-600">Children Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">150</div>
              <div className="text-gray-600">Workshops Conducted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
