// "use client"
// import React, { useEffect, useState } from 'react'
import { Characters } from '../models/Characters.moles'
// import Loader from '@/components/dynamic/Loader'
import Link from 'next/link'

const getCharactes = async () => {
    const requestAPI = await fetch('https://dragonball-api.com/api/characters')
    const data: Characters = await requestAPI.json()
    return data.items
}

export default async function page() {

    const characters = await getCharactes()

    return (
        <div className='bg-slate-100 min-h-screen'>
            <header className='bg-slate-900 text-white p-5 text-center'>
                <h1>Dragon Ball Characters</h1>
            </header>
            <main className='max-w-4xl mx-auto py-5'>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        characters.map((character) => {
                            return (
                                <div key={character.id} className='bg-white shadow-md rounded-lg p-5 mb-5'>
                                    <Link href={`/dr-dynamic/${character.id}`}>
                                    <h2 className='text-xl font-bold'>{character.name}</h2>
                                    <img src={character.image} alt={character.name}
                                        className='mx-auto h-60 rounded-lg mt-3' />
                                    {/* <p>{character.description}</p> */}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

            </main>
        </div>
    )
}
