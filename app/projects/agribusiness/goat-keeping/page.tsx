import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const goatKeepingSlides = [
  {
    id: 1,
    title: "The Mighty YPA Goat Keeping Project",
    description:
      "Empowering communities through sustainable goat farming that provides protein, income, and economic stability.",
    image: "/images/african-goat-farming-project-with-young-farmers2.png",
    cta: "Join This Project",
    ctaSecondary: "Learn Goat Farming",
  },
  {
    id: 2,
    title: "Building Resilient Livelihoods",
    description:
      "Creating sustainable income streams and food security through comprehensive goat farming programs across rural Africa.",
    image: "/images/resilient-goat-farming-communities.png",
    cta: "Community Impact",
    ctaSecondary: "Start Your Farm",
  },
  {
    id: 3,
    title: "From Farm to Market",
    description:
      "Complete value chain support from breeding and care to marketing and sales, ensuring profitable goat farming ventures.",
    image: "/images/goat-farming-value-chain-africa.png",
    cta: "Market Access",
    ctaSecondary: "Business Support",
  },
];

export default function GoatKeepingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={goatKeepingSlides} />

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
