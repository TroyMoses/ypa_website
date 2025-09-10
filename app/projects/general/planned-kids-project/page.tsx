import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeroSlider } from "@/components/page-hero-slider";

const plannedKidsSlides = [
  {
    id: 1,
    title: "YPA Planned Kids Project",
    description:
      "Empowering families through comprehensive family planning education and child development programs.",
    image: "/images/happy-african-families-with-children-in-educationa.png",
    cta: "Join Program",
    ctaSecondary: "Family Planning",
  },
  {
    id: 2,
    title: "Building Stronger Communities",
    description:
      "Supporting planned parenthood and child welfare initiatives that create healthier, more prosperous families.",
    image: "/images/strong-african-family-communities.png",
    cta: "Community Programs",
    ctaSecondary: "Child Development",
  },
  {
    id: 3,
    title: "Education & Support Services",
    description:
      "Comprehensive support including counseling, education, and resources for families planning their future.",
    image: "/images/family-education-support-services.png",
    cta: "Support Services",
    ctaSecondary: "Educational Resources",
  },
];

export default function PlannedKidsProjectPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={plannedKidsSlides} />

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
