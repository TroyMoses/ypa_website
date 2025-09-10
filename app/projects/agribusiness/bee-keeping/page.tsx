import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const beekeepingSlides = [
  {
    id: 1,
    title: "The Mighty YPA Bee Keeping Project",
    description:
      "Empowering African youth through sustainable beekeeping practices that generate income while preserving our environment.",
    image: "/images/african-beekeeping-project-with-modern-hives-and-y2.png",
    cta: "Join This Project",
    ctaSecondary: "Learn Beekeeping",
  },
  {
    id: 2,
    title: "Sweet Success Stories",
    description:
      "Discover how our beekeeping program has transformed lives and created sustainable income for hundreds of young entrepreneurs.",
    image: "/images/successful-african-beekeepers-with-honey.png",
    cta: "Success Stories",
    ctaSecondary: "Start Your Hive",
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description:
      "Join our mission to create thriving bee colonies that support biodiversity and environmental conservation across Africa.",
    image: "/images/bee-conservation-environmental-impact.png",
    cta: "Environmental Impact",
    ctaSecondary: "Conservation Programs",
  },
];

export default function BeekeepingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={beekeepingSlides} />

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
