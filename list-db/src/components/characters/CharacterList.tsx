import { getCharacters } from "@/services/characters"
import CharacterCard from "./CharacterCard"

export const CharacterList = async () => {
    const characters = await getCharacters()
    return (
        <div className="p-3 grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-3">
            {
                characters.items.map((character) => (
                    <CharacterCard character={character} key={character.id} />
                ) )
            }
        </div>
    )
}