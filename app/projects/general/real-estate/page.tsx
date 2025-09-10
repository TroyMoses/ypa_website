import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const realEstateSlides = [
  {
    id: 1,
    title: "YPA Real Estate Project",
    description:
      "Building affordable housing solutions and creating real estate investment opportunities for African youth.",
    image: "/images/modern-affordable-housing-development-in-africa.png",
    cta: "Explore Properties",
    ctaSecondary: "Investment Options",
  },
  {
    id: 2,
    title: "Transforming Communities",
    description:
      "Creating sustainable property development and homeownership programs that transform communities across Africa.",
    image: "/images/community-transformation-real-estate.png",
    cta: "Community Projects",
    ctaSecondary: "Homeownership Programs",
  },
  {
    id: 3,
    title: "Investment Opportunities",
    description:
      "Discover lucrative real estate investment opportunities with flexible payment plans and strong returns.",
    image: "/images/real-estate-investment-opportunities.png",
    cta: "Investment Plans",
    ctaSecondary: "ROI Calculator",
  },
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={realEstateSlides} />

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
