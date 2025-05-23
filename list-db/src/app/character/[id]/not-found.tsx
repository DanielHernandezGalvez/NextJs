import { Header } from "@/components/Header"
import Link from "next/link"

export default function notFound() {
    return (
        <>
            <Header />
            
            <h1 className="font-bold text-center text-2xl m-12">Personaje no encontrado</h1>
            <hr className="text-stone-300" />
            <div className="text-center">
                <Link className="bg-gray-200 border-blue300 text-blue-700 p-5 rounded" href={"/"}>Volver</Link>

            </div>
        </>
    )
}
