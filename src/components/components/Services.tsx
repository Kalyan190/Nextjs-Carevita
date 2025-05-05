import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar, Stethoscope, Microscope, Clipboard, Activity } from "lucide-react"

const services = [
  {
    title: "24/7 Emergency Care",
    description: "Immediate medical attention for urgent health concerns at any time of day or night.",
    icon: Clock,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "Appointment Scheduling",
    description: "Easy online booking for consultations with our healthcare specialists.",
    icon: Calendar,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "Health Check-ups",
    description: "Comprehensive preventive health screenings and regular check-ups.",
    icon: Stethoscope,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "Lab Services",
    description: "Advanced diagnostic testing and laboratory services with quick results.",
    icon: Microscope,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "Medical Records",
    description: "Secure online access to your complete medical history and test results.",
    icon: Clipboard,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    title: "Remote Monitoring",
    description: "Continuous health monitoring for chronic conditions from the comfort of your home.",
    icon: Activity,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Healthcare Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of medical services to ensure you receive the care you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
