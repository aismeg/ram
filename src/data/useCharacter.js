import { useEffect, useState } from "react";

export const useCharacter = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        getCharacter();
    }, [])
    const getCharacter = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character');

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        setData(await res.json());
    };

    return { data, getCharacter }
}