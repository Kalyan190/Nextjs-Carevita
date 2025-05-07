"use client"
import { AppContext } from '@/context/AppContext';
import React, { useContext, useEffect } from 'react'
const page = () => {
    const {doctors,getAllDoctorsData} = useContext(AppContext);

    useEffect(() => {
        const fetchDoctors = async () => {
            await getAllDoctorsData()
        }
        fetchDoctors()
    }
    , [window.onload])
    useEffect(() => {
        console.log(doctors);
    }
    , [doctors])
    
  return (
    <div>page</div>
  )
}

export default page