import React from 'react'
import { Metadata } from "next";
import Header from '../Header';

export const metadata: Metadata = {
  title: "blog",
  description: "This will be my first SaaS app",
}


export default function page() {


  return (
    <div className=' text-center py-3'>
      <Header background='bg-red-400' titulo="titulo reutilizable" />
      
    </div>
  )
}
