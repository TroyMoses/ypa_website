import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const lifeInsuranceSlides = [
  {
    id: 1,
    title: "YPA Prudential Life Insurance",
    description:
      "Securing the future of African families through comprehensive life insurance solutions and financial protection.",
    image: "/images/happy-african-family-with-life-insurance-protectio.png",
    cta: "Get Quote",
    ctaSecondary: "Financial Planning",
  },
  {
    id: 2,
    title: "Peace of Mind for Generations",
    description:
      "Providing financial protection and peace of mind for generations to come through tailored insurance products.",
    image: "/images/generational-financial-security-africa.png",
    cta: "Insurance Products",
    ctaSecondary: "Family Protection",
  },
  {
    id: 3,
    title: "Comprehensive Coverage Solutions",
    description:
      "From term life to whole life insurance, we offer comprehensive coverage options designed for African families.",
    image: "/images/comprehensive-insurance-coverage.png",
    cta: "Coverage Options",
    ctaSecondary: "Consultation",
  },
];

export default function PrudentialLifeInsurancePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={lifeInsuranceSlides} />

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
