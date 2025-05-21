import { CharacterModel } from "@/models/character.model";

const API_URL = 'https://dragonball-api.com/api/characters'

export const getCharacters = async () => {
    const response = await fetch(API_URL);
    const data: CharacterModel = await response.json();
    return data;
}