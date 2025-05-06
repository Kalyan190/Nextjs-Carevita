'use client'

import React, { useContext, useState } from 'react'
import { AppContext } from '@/context/AppContext'
import { assets } from '@/assets/assets_frontend/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Loader } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const MyProfile = () => {
   const {
      userData,
      setUserData,
      token,
      backendUrl,
      loadUserProfileData,
      loading,
      setLoading,
   } = useContext(AppContext)

   const [isEdit, setIsEdit] = useState(false)
   const [image, setImage] = useState<File | null>(null)

   const updateUserProfileData = async () => {
      try {
         setLoading(true)
         const formData = new FormData()
         if (!userData) return
         formData.append('name', userData.name)
         formData.append('phone', userData.phone)
         formData.append('address', JSON.stringify(userData.address))
         formData.append('gender', userData.gender)
         formData.append('dob', userData.dob)
         if (image) formData.append('image', image)

         const { data } = await axios.post(
            `${backendUrl}/api/user/update-profile`,
            formData,
            { headers: { token } }
         )

         if (data.success) {
            toast.success(data.message)
            await loadUserProfileData()
            setIsEdit(false)
            setImage(null)
         } else {
            toast.error(data.message)
         }
      } catch (error: any) {
         console.error(error)
         toast.error(error.message)
      } finally {
         setLoading(false)
      }
   }

   if (loading) {
      return (
         <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
            <Loader className="animate-spin text-primary w-12 h-12" />
         </div>
      )
   }

   if (!userData) return null

   return (
      <Card className="max-w-xl mx-auto mt-6 p-6 space-y-6 shadow-xl">
         <CardContent className="flex flex-col items-center">
            <div className="relative">
               <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                     src={image ? URL.createObjectURL(image) : userData.image}
                     alt="Profile"
                     className={`w-32 h-32 rounded-full object-cover border-4 ${isEdit ? 'opacity-80' : ''}`}
                  />
                  {isEdit && (
                     <img
                        className="w-8 absolute bottom-0 right-0"
                        src={assets.upload_icon.src}
                        alt="Upload"
                     />
                  )}
               </label>
               {isEdit && (
                  <input
                     type="file"
                     id="image-upload"
                     hidden
                     onChange={(e) => setImage(e.target.files?.[0] || null)}
                  />
               )}
            </div>

            {isEdit ? (
               <Input
                  value={userData.name}
                  onChange={(e) => setUserData((prev: any) => ({ ...prev, name: e.target.value }))}
                  className="text-xl font-semibold text-center mt-4"
               />
            ) : (
               <h2 className="text-2xl font-semibold mt-4">{userData.name}</h2>
            )}
         </CardContent>

         <div>
            <Label className="text-gray-500 mb-1 block">Contact Information</Label>
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <Label>Email:</Label>
                  <p className="text-blue-600">{userData.email}</p>
               </div>
               <div className="flex items-center gap-4">
                  <Label>Phone:</Label>
                  {isEdit ? (
                     <Input
                        value={userData.phone}
                        onChange={(e) => setUserData((prev: any) => ({ ...prev, phone: e.target.value }))}
                        className="max-w-sm"
                     />
                  ) : (
                     <p className="text-blue-600">{userData.phone}</p>
                  )}
               </div>
               <div>
                  <Label>Address:</Label>
                  {isEdit ? (
                     <div className="space-y-2">
                        <Input
                           value={userData.address.line1}
                           onChange={(e) =>
                              setUserData((prev: any) => ({
                                 ...prev,
                                 address: { ...prev.address, line1: e.target.value },
                              }))
                           }
                        />
                        <Input
                           value={userData.address.line2}
                           onChange={(e) =>
                              setUserData((prev: any) => ({
                                 ...prev,
                                 address: { ...prev.address, line2: e.target.value },
                              }))
                           }
                        />
                     </div>
                  ) : (
                     <p className="text-gray-600">
                        {userData.address.line1}
                        <br />
                        {userData.address.line2}
                     </p>
                  )}
               </div>
            </div>
         </div>

         <div>
            <Label className="text-gray-500 mb-1 block">Basic Information</Label>
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <Label>Gender:</Label>
                  {isEdit ? (
                     <Select
                        value={userData.gender}
                        onValueChange={(val) => setUserData((prev: any) => ({ ...prev, gender: val }))}
                     >
                        <SelectTrigger className="w-32">
                           <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="male">Male</SelectItem>
                           <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                     </Select>
                  ) : (
                     <p className="text-gray-600 capitalize">{userData.gender}</p>
                  )}
               </div>

               <div className="flex items-center gap-4">
                  <Label>Date of Birth:</Label>
                  {isEdit ? (
                     <Input
                        type="date"
                        value={userData.dob}
                        onChange={(e) => setUserData((prev: any) => ({ ...prev, dob: e.target.value }))}
                        className="w-40"
                     />
                  ) : (
                     <p className="text-gray-600">{userData.dob}</p>
                  )}
               </div>
            </div>
         </div>

         <div className="text-center pt-6">
            {isEdit ? (
               <Button variant="outline" onClick={updateUserProfileData}>
                  Save Information
               </Button>
            ) : (
               <Button onClick={() => setIsEdit(true)}>Edit</Button>
            )}
         </div>
      </Card>
   )
}

export default MyProfile
