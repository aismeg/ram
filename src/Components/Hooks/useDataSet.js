import { useEffect, useState } from "react";

export const useDataSet = () => {
    const [characters, setCharacters] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();

    let [page, setPage] = useState(1);
    let [name, setName] = useState('');
    let [gender, setGender] = useState('');
    let [species, setSpecies] = useState('');
    let [type, setType] = useState('');

    useEffect(() => {
        let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&gender=${gender}&species=${species}&type=${type}`;

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
    }, [gender, name, page, species, type]);

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }
    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    return { characters, nextPage, prevPage, page, setPage, setName, nextPageUrl, prevPageUrl, pages, currentPageUrl };
}