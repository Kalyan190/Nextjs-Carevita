import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, TreesIcon as Lungs, Stethoscope, Eye, Bone, Baby, Pill } from "lucide-react"

const specialties = [
  {
    name: "Cardiology",
    description: "Heart care and vascular treatments",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    name: "Neurology",
    description: "Brain and nervous system care",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    name: "Pulmonology",
    description: "Respiratory system treatments",
    icon: Lungs,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    name: "General Medicine",
    description: "Primary healthcare services",
    icon: Stethoscope,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    name: "Ophthalmology",
    description: "Eye care and treatments",
    icon: Eye,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    name: "Orthopedics",
    description: "Bone and joint care",
    icon: Bone,
    color: "text-gray-500",
    bgColor: "bg-gray-100",
  },
  {
    name: "Pediatrics",
    description: "Child healthcare services",
    icon: Baby,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
  },
  {
    name: "Pharmacy",
    description: "Medication and prescriptions",
    icon: Pill,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
  },
]

export default function SpecialityMenu() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Medical Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of specialized medical services to address all your healthcare needs with expert care
            and advanced technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-full ${specialty.bgColor} flex items-center justify-center mb-4`}>
                  <specialty.icon className={`h-7 w-7 ${specialty.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{specialty.name}</h3>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
