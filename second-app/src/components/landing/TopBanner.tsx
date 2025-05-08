import React from 'react'
import Link from 'next/link'

export default function TopBanner() {
  return (
    <div className='bg-[#03363a] text-center p-5'>
      <ul className='flex justify-center gap-3 text-white text-sm'>
        <li>Cx Trend 2024</li>
        <li>Unlock grow with costumer services</li>
        <li>
            <Link className='underline' href={"#"}>Get report</Link>
        </li>
      </ul>
    </div>
  )
}
