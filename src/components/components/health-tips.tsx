import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { assets } from '@/assets/assets_frontend/assets'

const healthTips = [
  {
    id: 1,
    title: "5 Ways to Boost Your Immune System Naturally",
    excerpt: "Discover simple lifestyle changes that can help strengthen your body's natural defenses.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Wellness",
    date: "May 2, 2023",
  },
  {
    id: 2,
    title: "Understanding Blood Pressure: What Your Numbers Mean",
    excerpt: "Learn how to interpret your blood pressure readings and what steps to take for better heart health.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Heart Health",
    date: "April 18, 2023",
  },
  {
    id: 3,
    title: "The Importance of Regular Health Screenings",
    excerpt:
      "Find out which health screenings are recommended at different ages and why they're crucial for prevention.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Preventive Care",
    date: "March 30, 2023",
  },
]

export default function HealthTips() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Health Tips & Articles</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay informed with the latest health information, tips, and advice from our medical experts.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip) => (
            <Card key={tip.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img src={assets.image3.src || "/placeholder.svg"} alt={tip.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {tip.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-gray-500 text-sm mb-2">{tip.date}</div>
                <h3 className="font-bold text-xl mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.excerpt}</p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent group"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
