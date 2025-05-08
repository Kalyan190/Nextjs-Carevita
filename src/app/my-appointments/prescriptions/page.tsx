"use client"
import { AppContext } from '@/context/AppContext';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
const page = () => {

  const [prescriptions, setPrescriptions] = React.useState([]);
    const { userData,setUserData,doctors,getAllDoctorsData } = useContext(AppContext);
    useEffect(() => {
      setUserData(userData);
      if(userData === null ) return;
      getAllDoctorsData();
    }
    , [userData])

  const getAllPrescriptions = async () => {
    if(userData === null) return;

    try {
      const { data } = await axios.get(`/api/user/prescription/${userData._id}`);
      if (data.success) {
        setPrescriptions(data.data.reverse());
      }
    }catch(err : any){
      console.error(err);
    }
  }

  useEffect(() => {
    getAllPrescriptions();
    getAllDoctorsData();
  }, [userData]);

  useEffect(() => {
    console.log(prescriptions,doctors)
  }
  , [prescriptions,doctors])


  return !prescriptions.length && !doctors.length ? (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold">
        No prescriptions for you currently !
      </h1>
    </div>
  ) : (
    <div>
      {prescriptions.map((prescription: any) => (
        <div
          key={prescription._id}
          className="border p-4 mb-4 rounded-md shadow-md"
        >
          <h2 className="text-lg font-semibold mb-2">
            Doctor : {doctors.find((doctor: any) => {
              doctor._id === prescription.doctorId}
)?.name || "CURRENTLY UNAVAILABLE"}
          </h2>
          
          <p className="font-semibold my-4">
            Date : {new Date(prescription.createdAt).toLocaleString()}
          </p>
          <Link href={prescription.fileUrl} target="_blank" className="mt-2 bg-green-500 px-4 py-2 rounded-xl text-white mt-2 font-bold cursor-pointer hover:bg-green-400">
            Download prescription
          </Link>
        </div>
      ))}
    </div>
  );
}

export default page