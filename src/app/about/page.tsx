import { assets } from "@/assets/assets_frontend/assets"
import { Clock, Award, Users, HeartPulse, MapPin, Phone, Mail, Calendar } from "lucide-react"

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="flex flex-col my-10 md:flex-row gap-12 ">
        <img className="w-full md:max-w-[360px]" src={assets.about_image.src || "/placeholder.svg"} alt="error" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>
            Welcome To CareVita, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently At
            Prescripto. We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments
            And Managing Their Health Records.
          </p>
          <p>
            Prescripto Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our
            Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service.
            Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You
            Every Step Of The Way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision At CareVita is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The
            Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When
            You Need It.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <div className="text-xl mb-4">
            <p>
              OUR <span className="text-gray-700 font-semibold">MISSION</span>
            </p>
          </div>
          <p>
            At CareVita, our mission is to revolutionize healthcare management by providing an intuitive, accessible
            platform that empowers patients to take control of their health journey. We are dedicated to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Simplifying the healthcare experience for everyone</li>
            <li>Ensuring timely access to quality medical care</li>
            <li>Protecting patient data with state-of-the-art security measures</li>
            <li>Fostering better communication between patients and healthcare providers</li>
            <li>Continuously innovating to meet evolving healthcare needs</li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:w-2/4">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm w-full">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <HeartPulse className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Compassion</h4>
                  <p className="text-sm text-gray-600">We care deeply about patient wellbeing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Excellence</h4>
                  <p className="text-sm text-gray-600">We strive for the highest standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Inclusivity</h4>
                  <p className="text-sm text-gray-600">Healthcare access for everyone</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Reliability</h4>
                  <p className="text-sm text-gray-600">Consistent, dependable service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Security:</b>
          <p>Advanced encryption and privacy measures to protect your sensitive health information</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Accessibility:</b>
          <p>24/7 platform availability with support for multiple devices and languages</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Innovation:</b>
          <p>Cutting-edge technology that evolves with the changing landscape of healthcare</p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="text-center text-2xl pt-10 pb-8 text-gray-500">
        <p>
          OUR <span className="text-gray-700 font-medium">SERVICES</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Appointment Scheduling</h3>
          <p className="text-sm text-gray-600">
            Book appointments with specialists and general practitioners with just a few clicks.
          </p>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Patient Records Management</h3>
          <p className="text-sm text-gray-600">
            Securely store and access your medical history, prescriptions, and test results.
          </p>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <HeartPulse className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Health Monitoring</h3>
          <p className="text-sm text-gray-600">
            Track vital signs and health metrics with personalized dashboards and alerts.
          </p>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Premium Care Programs</h3>
          <p className="text-sm text-gray-600">
            Access specialized care programs for chronic conditions and preventive health.
          </p>
        </div>
      </div>


      {/* Contact Information */}
      <div className="text-center text-2xl pt-10 pb-8 text-gray-500">
        <p>
          FIND <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="flex flex-col items-center p-6 border rounded-lg">
          <MapPin className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">Our Location</h3>
          <p className="text-center text-sm text-gray-600">
            Healthcare Avenue,Kolkata , West Bengal, 700152
          </p>
        </div>

        <div className="flex flex-col items-center p-6 border rounded-lg">
          <Phone className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">Call Us</h3>
          <p className="text-center text-sm text-gray-600">Main: +91 600-000-0000</p>
          <p className="text-center text-sm text-gray-600">Emergency: +91 620-000-0000</p>
        </div>

        <div className="flex flex-col items-center p-6 border rounded-lg">
          <Mail className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">Email Us</h3>
          <p className="text-center text-sm text-gray-600">info@carevita.com</p>
          <p className="text-center text-sm text-gray-600">support@carevita.com</p>
        </div>
      </div>
    </div>
  )
}

export default About
