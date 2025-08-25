import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PrudentialLifeInsurancePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                YPA Prudential Life Insurance
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Securing the future of African families through comprehensive
                life insurance solutions. Providing financial protection and
                peace of mind for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Quote
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/happy-african-family-with-life-insurance-protectio.png"
                alt="Life insurance project"
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
                <CardTitle>Insurance Products</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Term life insurance</li>
                  <li>• Whole life insurance</li>
                  <li>• Family protection plans</li>
                  <li>• Education savings plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Financial security</li>
                  <li>• Death benefit coverage</li>
                  <li>• Cash value accumulation</li>
                  <li>• Tax advantages</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free consultations</li>
                  <li>• Claims processing</li>
                  <li>• Policy management</li>
                  <li>• Financial planning</li>
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
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                5,000+
              </div>
              <div className="text-gray-600">Policies Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                15,000
              </div>
              <div className="text-gray-600">Lives Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                $50M
              </div>
              <div className="text-gray-600">Coverage Amount</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Claims Paid</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
