import { useEffect, useState } from "react";

export const useDataSet = () => {
    const [characters, setCharacters] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character?page=1');
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();

    useEffect(() => {
        const url = currentPageUrl;

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                setCharacters(data.results)
                setNextPageUrl(data.info.next);
                setPrevPageUrl(data.info.prev);
                setPages(data.info.pages);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [currentPageUrl]);

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }
    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }
    const goToPage = num => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    }
    const goToChar = name => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${1}&name=${name}`)

    }

    return { characters, nextPage, prevPage, goToPage, goToChar, nextPageUrl, prevPageUrl, pages, currentPageUrl };
}