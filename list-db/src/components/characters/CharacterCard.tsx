import { Character } from '@/models/character.model'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CharacterCardProp {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProp) {
    return (
        <div className='flex flex-col items-center justify-center p-3 border border-gray-200 rounded text-center'>
            <Link href={`/character/${character.id}`} >
                <Image
                    loading='lazy' // ahora se pone por defecto
                    className='h-60 object-contain mx-auto'
                    src={character.image}
                    alt={character.name}
                    height={200}
                    width={200}
                />
                <h3>      {character.name}
                </h3>
            </Link>
        </div>
    )
}
