import { useEffect, useState } from 'react';
import ContentCharacters from '../Content/contentCharacters/ContentCharacters';
import ContentTotalHeros from '../Content/contentCharacters/ContentTotalHeros';
import Pagination from '../pagination/Pagination/Pagination';

import style from './style.module.css';
import md5 from 'md5';
import SearchBar from '../SearchBar/SearchBar';

export default function Characters() {
    // page states
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(20);

    // Character states
    const [characters, setCharacters] = useState([]);
    const [total, setTotal] = useState(0);

    const [search, setSearch] = useState('');

    // fetch data from api marvel
    const fetchData = () => {
        const apiKey = '4f81be65ec9847a1f604eb1c0a55d48b';
        const privateKey = import.meta.env.VITE_PRIVATE_KEY;
        let timestamp = new Date().getTime();
        let hash = md5(timestamp + privateKey + apiKey);

        let url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=${charactersPerPage}&offset=${
            (currentPage - 1) * 20
        }${search.length > 0 ? `&nameStartsWith=${search}` : ''}`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(characters => {
                const { data } = characters;
                setCharacters(data.results);
                setTotal(data.total);
            })
            .catch(err => err.json());
    };

    // useEffect to show data in another pages. !mounting and unmounting!
    useEffect(() => {
        fetchData();
    }, [currentPage, search]);

    // change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className={style.heroCount}>
                <ContentTotalHeros total={total} />
            </div>

            <div className={style.paginationConfig}>
                <div className={style.searchBarConfig}>
                    <SearchBar value={search} setSearch={setSearch} />
                </div>

                <div className={style.pagination}>
                    <Pagination
                        itensPerPage={charactersPerPage}
                        totalItens={total}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
            </div>

            <article className={style.cardArticle}>
                <ContentCharacters characters={characters} />
            </article>
        </>
    );
}
