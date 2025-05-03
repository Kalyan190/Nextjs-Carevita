'use client'

import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import axios from 'axios'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Loader } from 'lucide-react'
import { AppContext } from '@/context/AppContext'

const SignUp = () => {
   const { loading, setLoading, backendUrl } = useContext(AppContext)
   const router = useRouter()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [name, setName] = useState('')

   const onSubmitHandler = async (event: React.FormEvent) => {
      event.preventDefault()
      try {
         setLoading(true)
         if (!name) return toast.error("Please enter the name.")
         if (!email) return toast.error("Please enter the email.")
         if (!password) return toast.error("Please enter the password.")

         const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password })

         if (data.success) {
            toast.success(data.message)
            router.push('/login')
         } else {
            toast.error(data.message)
         }

      } catch (error: any) {
         console.error("Error in form submission:", error)
         const errorMessage = error?.response?.data?.message || "Something went wrong. Please try again."
         toast.error(errorMessage)
      } finally {
         setLoading(false)
      }
   }

   return (
      <>
         
         <div className={`flex w-full ${loading ? 'opacity-45' : ''}`}>
            {loading && (
               <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
                  <Loader className="animate-spin text-violet-600 w-12 h-12" />
               </div>
            )}

            {/* Left animation section */}
            <div className="hidden lg:flex h-[80vh] w-1/2 items-center justify-center relative">
                      <DotLottieReact
                        src="https://lottie.host/298372bb-21da-4d35-afb2-e88e94606887/iMeptCpU8z.lottie"
                        loop
                        autoplay
                      />
                    </div>

            {/* Right form section */}
            <div className="w-full flex items-center justify-center lg:w-1/2">
               <div className='w-11/12 max-w-[600px] px-10 py-3 max-sm:px-4 rounded-3xl bg-white border-2 border-gray-100 max-sm:text-center'>
                  <h1 className='text-4xl max-sm:text-2xl font-semibold'>Create an Account</h1>
                  <p className='sm:font-medium sm:text-lg text-sm text-gray-500  mt-4'>Please enter your details to sign up.</p>

                  <form className='mt-6 text-left' onSubmit={onSubmitHandler}>
                     <div className='mb-4 '>
                        <label className='block text-gray-700 text-sm font-medium mb-1' htmlFor='name'>Name</label>
                        <input
                           type='text'
                           id='name'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 transition'
                           placeholder="Enter your name"
                           required
                        />
                     </div>

                     <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-1' htmlFor='email'>Email</label>
                        <input
                           type='email'
                           id='email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 transition'
                           placeholder="Enter your email"
                           required
                        />
                     </div>

                     <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-medium mb-1' htmlFor='password'>Password</label>
                        <input
                           type='password'
                           id='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 transition'
                           placeholder="Enter your password"
                           required
                        />
                     </div>

                     <button
                        type="submit"
                        className='w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg transition transform active:scale-95'
                     >
                        Sign Up
                     </button>
                  </form>

                  <div className='mt-6 text-center'>
                     <p className='text-sm text-gray-600'>Already have an account?{' '}
                        <button
                           onClick={() => router.push('/login')}
                           className='text-violet-600 hover:underline font-medium'
                        >
                           Login
                        </button>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default SignUp
