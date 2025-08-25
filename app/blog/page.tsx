import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of Sustainable Agriculture in Africa",
    excerpt:
      "Exploring innovative approaches to farming that balance productivity with environmental conservation across the African continent.",
    author: "Dr. Sarah Mukasa",
    date: "2025-01-20",
    category: "Sustainability",
    readTime: "5 min read",
    image: "/blog-sustainable-agriculture.png",
  },
  {
    title: "Empowering Young Farmers Through Technology",
    excerpt:
      "How digital tools and mobile applications are revolutionizing the way young farmers access information, markets, and financial services.",
    author: "James Ochieng",
    date: "2025-01-18",
    category: "Technology",
    readTime: "7 min read",
    image: "/blog-technology-farmers.png",
  },
  {
    title: "Building Resilient Food Systems in East Africa",
    excerpt:
      "Strategies for creating food systems that can withstand climate change while ensuring food security for growing populations.",
    author: "Dr. Amina Hassan",
    date: "2025-01-15",
    category: "Food Security",
    readTime: "6 min read",
    image: "/blog-food-systems.png",
  },
  {
    title: "Success Stories: Young Entrepreneurs Transforming Agriculture",
    excerpt:
      "Meet the inspiring young entrepreneurs who are creating innovative solutions and building successful agribusiness ventures.",
    author: "Michael Kwame",
    date: "2025-01-12",
    category: "Success Stories",
    readTime: "8 min read",
    image: "/blog-entrepreneurs.png",
  },
  {
    title: "Climate-Smart Agriculture: Adapting to Change",
    excerpt:
      "Understanding how farmers can adapt their practices to climate change while maintaining productivity and profitability.",
    author: "Dr. Grace Wanjiku",
    date: "2025-01-10",
    category: "Climate",
    readTime: "6 min read",
    image: "/blog-climate-smart.png",
  },
  {
    title: "Market Access: Connecting Farmers to Opportunities",
    excerpt:
      "Exploring strategies and platforms that help smallholder farmers access better markets and achieve fair prices for their produce.",
    author: "David Mwangi",
    date: "2025-01-08",
    category: "Market Access",
    readTime: "5 min read",
    image: "/blog-market-access.png",
  },
]

const categories = [
  "All",
  "Sustainability",
  "Technology",
  "Food Security",
  "Success Stories",
  "Climate",
  "Market Access",
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Blog & Articles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, stories, and expert knowledge on sustainable agriculture, youth empowerment, and agribusiness
            development in Africa.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="cursor-pointer"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                />
                <Badge className="absolute top-4 left-4">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-3">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="text-2xl font-bold font-serif mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button className="w-fit cursor-pointer">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-serif mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="cursor-pointer bg-transparent">
            Load More Articles
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
