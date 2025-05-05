import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { assets } from '@/assets/assets_frontend/assets'

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Patient",
    rating: 4,
    text: "The care I received was exceptional. The doctors took the time to listen to my concerns and provided a treatment plan that worked perfectly for me.",
  },
  {
    id: 2,
    name: "Adarsh Gupta",
    role: "Patient",
    rating: 5,
    text: "I've been a patient here for over 5 years and have always received top-notch care. The staff is friendly and the facilities are modern and clean.",
  },
  {
    id: 3,
    name: "Prince Barniwal",
    role: "c............",
    rating: 3,
    text: "The online appointment booking system is so convenient, and the doctors are always punctual. I appreciate how they explain everything clearly.",
  },
  {
    id: 4,
    name: "Supratik Das Gupta ",
    role: "tester",
    rating: 4,
    text: "After struggling with my condition for years, the specialists here finally provided the right diagnosis and treatment. I'm forever grateful.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our patients about their experiences with our healthcare services and medical
            professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={assets.Dermatologist.src}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
