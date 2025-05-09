import React from 'react'
import Link from 'next/link'

export const Menu = () => {
    return (
        <menu className='w-72 mx-auto text-center pt-10'>
            <ul>
                <li><Link href="/ssr-landing" className='mb-3 p-3 block w-full bg-slate-200 rounded hover:bg-slate-400 hover:text-white '>SSR Server Side Rendering</Link></li>
                <li><Link href="/csr-password" className='mb-3 p-3 block w-full bg-slate-200 rounded hover:bg-slate-400 hover:text-white '>CSR Client Side Rendering</Link></li>
                <li><Link href="/dr-dynamic" className='mb-3 p-3 block w-full bg-slate-200 rounded hover:bg-slate-400 hover:text-white '>DR Dinamyc rendering</Link></li>
            </ul>
        </menu>
    )
}
