import { Header } from "@/components/Header"
import { getCharacterById } from "@/services/characters"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {

    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]

}

interface CharacterPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: CharacterPageProps): Promise<Metadata> {
    const { id } = await params
    const character = await getCharacterById(id)
    return {
        title: character.name
    }
}

const CharacterPage = async ({ params }: CharacterPageProps) => {

    const { id } = await params
    const character = await getCharacterById(id)

    if (character.id === undefined) {
        notFound()
    }

    return (
        <div>
            <Header />
            <section className="max-w-3xl mx-auto p-5 flex">

                <div>
                    <Image
                        src={character.image}
                        width={500}
                        height={500}
                        alt={character.name}
                        className="h-auto w-auto min-w-52 "
                    />
                </div>

                <div>
                    <h1>{character.name}  </h1>
                    <p>{character.description}</p>
                </div>

            </section>

            <hr className="text-stone-300" />
            <div className="text-center">
                <Link className="bg-gray-200 border-blue300 text-blue-700 p-5 rounded" href={"/"}>Volver</Link>

            </div>
        </div>
    )
}

export default CharacterPage
