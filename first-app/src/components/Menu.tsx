import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <ul className="flex justify-center gap-4 w-full bg-slate-500 p-5">
          <li className="bg-white p-2 rounded-xl shadow-md"><Link href="/">inicio</Link></li>
          <li className="bg-white p-2 rounded-xl shadow-md"><Link href="/blog">blog</Link></li>
          <li className="bg-white p-2 rounded-xl shadow-md"><Link href="/contact">contacto</Link></li>
        </ul>
  )
}
