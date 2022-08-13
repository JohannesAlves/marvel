import { useEffect, useState } from 'react';
import ContentCharacters from './contentCharacters/ContentCharacters';
import ContentTotalHeros from './contentCharacters/ContentTotalHeros';
import Pagination from '../pagination/Pagination'

import md5 from 'md5'
import style from './style.module.css'
import { useRef } from 'react';


export default function Characters () {
    const [charactersPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [total, setTotal] = useState(0);

        //Get current characters page
        const indexOfLastCharacter = currentPage * charactersPerPage;
        const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
        const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
    
        // change page
        const paginate = pageNumber => setCurrentPage(pageNumber)

        // get previous page
        const prevPageRef = useRef()


    useEffect( () => {
        const apiKey = '4f81be65ec9847a1f604eb1c0a55d48b';
        const privateKey = import.meta.env.VITE_PRIVATE_KEY;
        let timestamp = new Date().getTime();
        let hash = md5(timestamp+privateKey+apiKey);

        prevPageRef.current = currentPage

        let url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=20&offset=${currentPage}`
        console.log(url)

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



    }, [currentPage])




    return (
    <>
        <div className={style.heroCount}>
            <ContentTotalHeros total={total}/>
        </div>

        <article className={style.cardArticle}>
                <ContentCharacters characters={currentCharacters}/>
        </article>

        <div className={style.pagination}>
                <Pagination charactersPerPage={charactersPerPage} totalCharacters={total} paginate={paginate}/>
        </div>
    </>
    )
}

