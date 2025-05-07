import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
  description: "This will be my first SaaS app",
}


export default function page() {
  return (
    <div className='bg-red-500 text-center py-3'>
      <h1 className='text-white'>Blog</h1>
      
    </div>
  )
}
