import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "Farmer, YPA Member",
    content: "Joining YPA was the best decision I ever made.",
    rating: 5,
    image: "/african-farmer-testimonial.png",
  },
  {
    name: "Michael Johnson",
    role: "Manager, Local Co-op",
    content: "The training I received changed everything for me. I feel empowered to succeed.",
    rating: 5,
    image: "/african-manager-testimonial.png",
  },
  {
    name: "David Brown",
    role: "Advisor, YPA Network",
    content: "YPA is a game changer for young farmers.",
    rating: 5,
    image: "/african-advisor-testimonial.png",
  },
  {
    name: "Jane Smith",
    role: "Entrepreneur, YPA Member",
    content: "YPA's support has been invaluable. I now run a successful goat farm.",
    rating: 5,
    image: "/african-entrepreneur-testimonial.png",
  },
  {
    name: "Sarah Williams",
    role: "Volunteer, YPA Team",
    content: "YPA has opened doors I never thought possible. The community support is incredible.",
    rating: 5,
    image: "/african-volunteer-testimonial.png",
  },
  {
    name: "Emily Davis",
    role: "Coordinator, YPA Initiative",
    content: "The resources provided by YPA are unmatched in the industry.",
    rating: 5,
    image: "/african-coordinator-testimonial.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Member Testimonials</h2>
          <p className="text-gray-600">YPA has transformed my life and business opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
