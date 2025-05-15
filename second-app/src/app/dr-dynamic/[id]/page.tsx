import { SingleCharacter } from "@/app/models/Character.model"

interface IPropsSingleCharacter {
    params: Promise<{ id: string }>
}

// crear la función que solicite la informacion
const getSingleCharactes = async (id: string) => {
    const requestAPI = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data: SingleCharacter = await requestAPI.json()
    return data
}

export default async function SingleCharacterById({ params }: IPropsSingleCharacter) {

    const {id} = await params; // por eso el tipo promesa en la interface

    if (!id) {
        return {
            notFound: true
        }
    }



    // llamar la funcion que nos solicite los datos de la api
    // signarla a una variable
    const character = await getSingleCharactes(id)
    return (
        <div>
            <header className='bg-slate-900 text-white p-5 text-center'>
                <h1>Dragon Ball Characters</h1>
            </header>
            <section></section>
            <div className='max-w-4xl p-5'>

                <div key={character.id} className='bg-white shadow-md rounded-lg p-5 mb-5'>
                    <h2 className='text-xl font-bold'>{character.name}</h2>
                    <img src={character.image} alt={character.name}
                        className='mx-auto h-60 rounded-lg mt-3' />
                        {
                            character.transformations.length === 0 && (
                                <p className="text-red-900 underline font-bold">Este personaje no tiene transformaciones</p>
                            )
                        }
                       

                        {
                            character.transformations.length > 0 && (
                                <div className="flex gap-5 flex-wrap">
                                    {
                                        character.transformations.map((trasformation) => {
                                            return (
                                                <div key={trasformation.id} className="bg-slate-100 p-2 rounded-lg mt-3">
                                                    <h3 className="text-lg font-bold">{trasformation.name}</h3>
                                                    <img src={trasformation.image} alt={trasformation.name}
                                                        className='mx-auto h-20 rounded-lg mt-3' />
                                                </div>  
                                            )
                                        })
                                    }
                                </div>
                            )
                        }

                    <p>{character.description}</p>
                </div>

            </div>
        </div>
    )
}
