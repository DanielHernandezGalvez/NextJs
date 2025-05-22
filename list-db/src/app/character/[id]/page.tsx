import { Header } from "@/components/Header"
import Link from "next/link"

interface CharacterPageProps {
    params: { id: string }
}

const CharacterPage = async ({ params }: CharacterPageProps) => {

    const {id} = await params

    return (
        <div>
            <Header />
            <h1>character page</h1>
            {
                id
            }
            <hr className="text-stone-300" />
            <div className="text-center">
                <Link className="bg-gray-200 border-blue300 text-blue-700 p-5 rounded" href={"/"}>Volver</Link>

            </div>
        </div>
    )
}

export default CharacterPage
