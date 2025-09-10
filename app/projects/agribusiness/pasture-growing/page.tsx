import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const pastureGrowingSlides = [
  {
    id: 1,
    title: "The Mighty YPA Pasture Growing Project",
    description:
      "Transforming degraded lands into productive pastures that support livestock farming and environmental restoration.",
    image: "/images/lush-green-pastures-with-cattle-grazing-in-africa.png",
    cta: "Join This Project",
    ctaSecondary: "Land Restoration",
  },
  {
    id: 2,
    title: "Sustainable Land Management",
    description:
      "Creating sustainable feed sources for thriving agricultural communities while restoring ecosystem health.",
    image: "/images/sustainable-pasture-management-africa.png",
    cta: "Sustainability Programs",
    ctaSecondary: "Learn Techniques",
  },
  {
    id: 3,
    title: "Environmental Restoration",
    description:
      "Healing the land through innovative pasture establishment that combats desertification and promotes biodiversity.",
    image: "/images/environmental-restoration-pastures.png",
    cta: "Environmental Impact",
    ctaSecondary: "Restoration Projects",
  },
];

export default function PastureGrowingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={pastureGrowingSlides} />

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
