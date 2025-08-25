import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function EmpowermentSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Empowerment Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-primary font-medium mb-4">Empower</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Join Us in Transforming African Agriculture
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Become part of a vibrant community dedicated to sustainable farming. Experience economic empowerment
              through shared resources and knowledge.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">Support local farmers and strengthen community ties.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">Access to training and resources for sustainable practices.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">Contribute to a greener future for Africa.</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Button className="cursor-pointer">Join</Button>
              <Button variant="outline" className="cursor-pointer bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-NO6YwvFzvGyF8si0zcftvwYvHmDYqG.png"
              alt="Woman working on laptop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Three Column Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-4">
            Empowering the Next Generation of Agribusiness Leaders Across Africa
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/sustainable-farm.png"
                    alt="Building Sustainable Futures"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-4">
                  Building Sustainable Futures Through Innovative Agricultural Practices
                </h3>
                <p className="text-gray-600 mb-6">
                  We empower youth with modern farming and business skills for sustainable agriculture.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/community-engagement-sustainable-practices.png"
                    alt="Driving Change Through Sustainable Practices"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-4">
                  Driving Change Through Sustainable Practices and Community Engagement
                </h3>
                <p className="text-gray-600 mb-6">
                  Our initiatives create lasting impact that benefit communities and the environment.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                  Join Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/continental-agribusiness-development.png"
                    alt="Transforming Lives with Continental Focus"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-4">
                  Transforming Lives with a Focus on Continental Agribusiness Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Together, we are creating a ripple effect of positive change across Africa.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                  Get Involved
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
