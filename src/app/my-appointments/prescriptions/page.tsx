"use client"

import { AppContext } from "@/context/AppContext"
import axios from "axios"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { FileText, Calendar, User, Download, ClipboardList } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const PrescriptionsPage = () => {
  const [prescriptions, setPrescriptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { userData, setUserData, doctors, getAllDoctorsData } = useContext(AppContext)

  useEffect(() => {
    setUserData(userData)
    if (userData === null) return
    getAllDoctorsData()
  }, [userData, setUserData, getAllDoctorsData])

  const getAllPrescriptions = async () => {
    if (userData === null) return
    setIsLoading(true)

    try {
      const { data } = await axios.get(`/api/user/prescription/${userData._id}`)
      if (data.success) {
        setPrescriptions(data.data.reverse())
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllPrescriptions()
    getAllDoctorsData()
  }, [userData])

  // Loading skeleton UI
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-8">
          <ClipboardList className="h-6 w-6 mr-2" />
          <h1 className="text-2xl font-bold">Your Prescriptions</h1>
        </div>

        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white border rounded-lg shadow-sm p-6 mb-4">
            <div className="flex items-center mb-4">
              <Skeleton className="h-5 w-5 mr-2" />
              <Skeleton className="h-6 w-48" />
            </div>
            <div className="flex items-center mb-4">
              <Skeleton className="h-5 w-5 mr-2" />
              <Skeleton className="h-5 w-64" />
            </div>
            <Skeleton className="h-10 w-48 rounded-xl" />
          </div>
        ))}
      </div>
    )
  }

  // Empty state
  if (!prescriptions.length && !doctors.length) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center px-4">
        <FileText className="h-16 w-16 text-gray-400 mb-4" />
        <h1 className="text-2xl font-semibold mb-2">No prescriptions available</h1>
        <p className="text-gray-500">You don't have any prescriptions at the moment.</p>
      </div>
    )
  }

  // Prescription list
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center mb-8">
        <ClipboardList className="h-6 w-6 mr-2" />
        <h1 className="text-2xl font-bold">Your Prescriptions</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        {prescriptions.map((prescription: any) => (
          <div
            key={prescription._id}
            className="bg-white border rounded-lg shadow-sm p-6 transition-all hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="space-y-3">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-600 mr-2" />
                  <h2 className="text-lg font-semibold">Dr. {prescription?.doctor?.name || "Unknown Doctor"}</h2>
                </div>

                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <p className="font-medium">
                    {new Date(prescription.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              <Link
                href={prescription.fileUrl}
                target="_blank"
                className="flex items-center justify-center bg-green-500 px-4 py-2 rounded-xl text-white mt-4 md:mt-0 font-medium hover:bg-green-600 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Prescription
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrescriptionsPage
