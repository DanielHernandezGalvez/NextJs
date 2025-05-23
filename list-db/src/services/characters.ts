import { Character, CharacterModel } from "@/models/character.model";

const API_URL = 'https://dragonball-api.com/api/characters'

export const getCharacters = async () => {
    const response = await fetch(API_URL);
    const data: CharacterModel = await response.json();
    return data;
}

export const getCharacterById = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        // cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24 // cada cuanto se verifica el api
        }
    })
    const data: Character = await response.json()
    return data
}