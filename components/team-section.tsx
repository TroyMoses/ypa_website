import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Project Manager",
    description: "Jane leads our strategic initiatives, ensuring projects align with our vision and goals.",
    image: "/professional-african-woman-project-manager.png",
  },
  {
    name: "John Smith",
    role: "Marketing Director",
    description: "John crafts strategies that elevate our community outreach and brand effectively.",
    image: "/professional-african-man-marketing-director.png",
  },
  {
    name: "Emily Johnson",
    role: "Finance Officer",
    description: "Emily manages our finances, ensuring transparency and efficiency in all operations.",
    image: "/professional-african-woman-finance-officer.png",
  },
  {
    name: "Michael Brown",
    role: "Operations Lead",
    description: "Michael oversees daily operations, ensuring seamless delivery and effectiveness.",
    image: "/professional-african-man-operations-lead.png",
  },
  {
    name: "Sarah Wilson",
    role: "Community Liaison",
    description: "Sarah connects with local communities, fostering partnerships and collaborations for mutual growth.",
    image: "/professional-african-woman-community-liaison.png",
  },
  {
    name: "David Lee",
    role: "Research Analyst",
    description: "David conducts research to inform our strategies and enhance our impact in agribusiness.",
    image: "/professional-african-man-research-analyst.png",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4">Team</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet the dedicated individuals driving our mission forward.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hiring Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold font-serif mb-4">We're Hiring!</h3>
          <p className="text-gray-600 mb-6">Join our passionate team and make a difference.</p>
          <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">Open Positions</Button>
        </div>
      </div>
    </section>
  )
}
