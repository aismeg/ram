import { useEffect, useState } from "react";

export const useDataSet = () => {
    const [characters, setCharacters] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&gender=${gender}&species=${species}&type=${type}&status=${status}`;

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                setCurrentPageUrl(data);
                setCharacters(data.results)
                setNextPageUrl(data.info.next);
                setPrevPageUrl(data.info.prev);
                setPages(data.info.pages);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [gender, name, page, species, status, type]);

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }
    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    return { characters, nextPage, prevPage, page, setPage, setGender, setSpecies, setType, setName, setStatus, nextPageUrl, prevPageUrl, pages, currentPageUrl };
}