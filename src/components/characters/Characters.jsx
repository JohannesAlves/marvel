import { useEffect, useState } from 'react';
import ContentCharacters from './contentCharacters/ContentCharacters';
import ContentTotalHeros from './contentCharacters/ContentTotalHeros';
import Pagination from '../pagination/Pagination'

import style from './style.module.css'
import md5 from 'md5'


export default function Characters () {
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(20);
    const [characters, setCharacters] = useState([]);
    const [total, setTotal] = useState(0);



        // get previous page

        const fetchData =  () => {
            const apiKey = '4f81be65ec9847a1f604eb1c0a55d48b';
            const privateKey = import.meta.env.VITE_PRIVATE_KEY;
            let timestamp = new Date().getTime();
            let hash = md5(timestamp+privateKey+apiKey);
    
    
            let url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=20&offset=${(currentPage - 1) * 20 }`
    
            fetch(url)
            .then(response => {
                return response.json()
            })
            .then(characters => {
                const {data} = characters
                setCharacters(data.results)
                setTotal(data.total)
            })
            .catch(err => err.json())
    
        }

    useEffect( () => {
    
        fetchData()

    }, [currentPage])

        
            // change page
            const paginate = pageNumber => setCurrentPage(pageNumber)


    return (
    <>
        <div className={style.heroCount}>
            <ContentTotalHeros total={total}/>
        </div>

        <article className={style.cardArticle}>
                <ContentCharacters characters={characters}/>
        </article>

        <div className={style.pagination}>
                <Pagination charactersPerPage={charactersPerPage} totalCharacters={total} paginate={paginate}/>
        </div>
    </>
    )
}

