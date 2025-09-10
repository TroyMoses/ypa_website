import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { PageHeroSlider } from "@/components/page-hero-slider";
import Image from "next/image";

const newsSlides = [
  {
    id: 1,
    title: "News & Events",
    description:
      "Stay updated with the latest developments, initiatives, and upcoming events from Youth Platform Africa.",
    image: "/images/african-agricultural-news-and-events.png",
    cta: "Latest News",
    ctaSecondary: "Upcoming Events",
  },
  {
    id: 2,
    title: "Agricultural Innovation Summit",
    description:
      "Join us for the largest gathering of young agricultural innovators and entrepreneurs across East Africa.",
    image: "/images/agricultural-innovation-summit-africa.png",
    cta: "Register Now",
    ctaSecondary: "View Agenda",
  },
  {
    id: 3,
    title: "Success Stories & Updates",
    description:
      "Celebrate the achievements of our community members and learn about new program launches and partnerships.",
    image: "/images/african-agricultural-success-stories.png",
    cta: "Read Stories",
    ctaSecondary: "Share Your Success",
  },
];

const newsArticles = [
  {
    title: "YPA Launches New Sustainable Farming Initiative Across East Africa",
    excerpt:
      "Our latest program aims to train 10,000 young farmers in climate-smart agriculture techniques over the next two years.",
    date: "2025-01-15",
    category: "Program Launch",
    image: "/news-sustainable-farming.png",
  },
  {
    title: "Partnership with International Development Organizations Announced",
    excerpt:
      "YPA partners with leading development organizations to expand agricultural training programs across the continent.",
    date: "2025-01-10",
    category: "Partnership",
    image: "/news-partnership.png",
  },
  {
    title: "Young Farmers Showcase Innovation at Annual Agriculture Summit",
    excerpt:
      "Over 500 young entrepreneurs presented their innovative solutions at this year's summit in Kampala.",
    date: "2025-01-05",
    category: "Event",
    image: "/news-summit.png",
  },
];

const upcomingEvents = [
  {
    title: "Agricultural Innovation Workshop",
    date: "2025-02-15",
    location: "Kampala, Uganda",
    attendees: "150+ Expected",
    description:
      "Learn about the latest agricultural technologies and sustainable farming practices.",
  },
  {
    title: "Youth Agribusiness Conference",
    date: "2025-03-20",
    location: "Nairobi, Kenya",
    attendees: "500+ Expected",
    description:
      "Connect with fellow young entrepreneurs and industry leaders across East Africa.",
  },
  {
    title: "Sustainable Farming Training Program",
    date: "2025-04-10",
    location: "Dar es Salaam, Tanzania",
    attendees: "200+ Expected",
    description:
      "Intensive 3-day training program on climate-smart agriculture techniques.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={newsSlides} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-serif mb-8">Latest News</h2>
            <div className="space-y-8">
              {newsArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="secondary">{article.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold font-serif mb-3">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer bg-transparent"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-8">
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold font-serif mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        {event.attendees}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    <Button size="sm" className="w-full cursor-pointer">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
