import React from 'react'
import { assets } from '@/assets/assets_frontend/assets'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm '>
        <div>
          <img className='mb-5 w-40' src={assets.logo.src} alt="error" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Providing quality healthcare services with compassion and expertise. Your health is our priority.</p>
          <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
        </div>

        <div>
          <p className='text-sl font-medium mb-5 '>Quick Links</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact us</Link>
            <Link href={"/privact-policy"}>Privacy Policy</Link>
          </ul>
        </div>

        <div>
          <p className='text-sl font-medium mb-5 '>Contact Info</p>
          <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                <span>NSEC, Kolkata, West Bengal, 700152</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span>+91 620-000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <span>info@CareVita.com</span>
              </li>
          </ul>
          
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 py-5 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 CareVita. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
      </div>
      {/* <div>
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2024@ CareVita - All Right Reserved.</p>
      </div> */}
    </div>
  )
}

export default Footer
