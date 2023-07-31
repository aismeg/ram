import { useEffect, useState } from "react";

export const usePagination = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character');
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();

    useEffect(() => {
        const url = currentPageUrl;

        setLoading(true);

        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();

            setCharacters(data.results)
            setLoading(false);
            setNextPageUrl(data.info.next);
            setPrevPageUrl(data.info.prev);
            setPages(data.info.pages)
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
    if (loading) return "Loading...";

    return { characters, nextPage, prevPage, goToPage, nextPageUrl, prevPageUrl, pages };
}