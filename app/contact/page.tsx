import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeroSlider } from "@/components/page-hero-slider";

const contactSlides = [
  {
    id: 1,
    title: "Contact Us",
    description:
      "Get in touch with our team. We're here to help you on your agricultural journey and answer any questions you may have.",
    image: "/images/african-agricultural-support-team.png",
    cta: "Send Message",
    ctaSecondary: "Call Us Now",
  },
  {
    id: 2,
    title: "Connect Across Africa",
    description:
      "With offices across East Africa, we're always close by to provide support and guidance for your agricultural ventures.",
    image: "/images/pan-african-agricultural-network.png",
    cta: "Find Local Office",
    ctaSecondary: "Schedule Meeting",
  },
  {
    id: 3,
    title: "Join Our Community",
    description:
      "Become part of a growing network of young farmers and entrepreneurs transforming agriculture across Africa.",
    image: "/images/african-farming-community-network.png",
    cta: "Join Community",
    ctaSecondary: "Attend Events",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeroSlider slides={contactSlides} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Address</h3>
                  <p className="text-gray-600">info@youthplatformafrica.org</p>
                  <p className="text-gray-600">
                    support@youthplatformafrica.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Numbers</h3>
                  <p className="text-gray-600">+256 123 456 789</p>
                  <p className="text-gray-600">+256 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-600">123 Buganda Road</p>
                  <p className="text-gray-600">Kampala, Uganda</p>
                  <p className="text-gray-600">P.O. Box 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div>
              <h3 className="text-lg font-semibold font-serif mb-4">
                Regional Offices
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Kenya Office</h4>
                    <p className="text-sm text-gray-600">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-600">+254 123 456 789</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Tanzania Office</h4>
                    <p className="text-sm text-gray-600">
                      Dar es Salaam, Tanzania
                    </p>
                    <p className="text-sm text-gray-600">+255 123 456 789</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-serif mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+256 123 456 789" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="training">
                        Training Programs
                      </SelectItem>
                      <SelectItem value="partnership">
                        Partnership Opportunities
                      </SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="newsletter" className="mt-1" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    I would like to receive updates and newsletters from Youth
                    Platform Africa
                  </label>
                </div>

                <Button type="submit" className="w-full cursor-pointer">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold font-serif mb-8 text-center">
            Find Us
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-sm text-gray-500">
                    123 Buganda Road, Kampala, Uganda
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  );
}
