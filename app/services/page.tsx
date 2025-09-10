import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  BookOpen,
  Sprout,
  TrendingUp,
  Globe,
  Heart,
} from "lucide-react";
import { PageHeroSlider } from "@/components/page-hero-slider";

const servicesSlides = [
  {
    id: 1,
    title: "Our Services",
    description:
      "Comprehensive solutions designed to empower African youth in agribusiness and drive sustainable agricultural transformation.",
    image: "/images/comprehensive-agricultural-services-africa.png",
    cta: "Explore Services",
    ctaSecondary: "Get Started",
  },
  {
    id: 2,
    title: "Training & Education Programs",
    description:
      "World-class agricultural training covering modern techniques, business management, and sustainable practices.",
    image: "/images/agricultural-training-programs-africa.png",
    cta: "View Programs",
    ctaSecondary: "Enroll Now",
  },
  {
    id: 3,
    title: "Community & Market Support",
    description:
      "Building networks, connecting farmers to markets, and creating lasting impact in rural communities across Africa.",
    image: "/images/agricultural-community-support-africa.png",
    cta: "Join Network",
    ctaSecondary: "Find Markets",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Training & Education",
    description:
      "Comprehensive agricultural training programs covering modern farming techniques, business management, and sustainable practices.",
    features: [
      "Hands-on workshops",
      "Online courses",
      "Certification programs",
      "Mentorship opportunities",
    ],
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Creating networks of young farmers and agribusiness entrepreneurs across Africa for knowledge sharing and collaboration.",
    features: [
      "Farmer networks",
      "Youth groups",
      "Regional chapters",
      "Annual conferences",
    ],
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Promoting environmentally friendly farming practices that increase productivity while preserving natural resources.",
    features: [
      "Organic farming",
      "Water conservation",
      "Soil health management",
      "Climate-smart agriculture",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Supporting young entrepreneurs in developing profitable and sustainable agribusiness ventures.",
    features: [
      "Business planning",
      "Market access",
      "Financial literacy",
      "Investment opportunities",
    ],
  },
  {
    icon: Globe,
    title: "Market Linkages",
    description:
      "Connecting farmers with markets, buyers, and value chain partners to ensure fair prices and sustainable income.",
    features: [
      "Market research",
      "Buyer connections",
      "Value addition",
      "Export opportunities",
    ],
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Creating positive social and economic impact in rural communities through agricultural development initiatives.",
    features: [
      "Rural development",
      "Food security",
      "Job creation",
      "Women empowerment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={servicesSlides} />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-serif mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready to Transform Your Agricultural Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of young farmers and entrepreneurs who are already
            benefiting from our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
