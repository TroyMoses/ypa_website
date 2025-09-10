import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const maizeFarmingSlides = [
  {
    id: 1,
    title: "The Mighty YPA Maize Farming Project",
    description:
      "Revolutionizing maize production across Africa through modern farming techniques, quality seeds, and sustainable practices.",
    image: "/images/african-maize-farming-project-with-modern-agricult2.png",
    cta: "Join This Project",
    ctaSecondary: "Learn Modern Techniques",
  },
  {
    id: 2,
    title: "Food Security Revolution",
    description:
      "Building food security one farm at a time through innovative maize production methods and farmer empowerment programs.",
    image: "/images/food-security-maize-farming-africa.png",
    cta: "Food Security Impact",
    ctaSecondary: "Farming Programs",
  },
  {
    id: 3,
    title: "Technology Meets Tradition",
    description:
      "Combining traditional farming wisdom with cutting-edge agricultural technology to maximize maize yields and profitability.",
    image: "/images/modern-technology-traditional-farming.png",
    cta: "Technology Solutions",
    ctaSecondary: "Training Programs",
  },
];

export default function MaizeFarmingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={maizeFarmingSlides} />

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
