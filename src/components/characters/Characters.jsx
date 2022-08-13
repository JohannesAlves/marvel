import { useEffect, useState } from 'react';
import Card from './card/Card'

import md5 from 'md5'
import style from './style.module.css'


export default function Characters () {
    const [total, setTotal] = useState(0);
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        const apiKey = '4f81be65ec9847a1f604eb1c0a55d48b';
        const privateKey = import.meta.env.VITE_PRIVATE_KEY;
        let timestamp = new Date().getTime();
        let hash = md5(timestamp+privateKey+apiKey);

        let url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=20`

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(characters => {
            const {data} = characters
            setTotal(data.total)
            setCharacters(data.results)
        })
        .catch(err => err.json())



    }, [])

    function ContentCharacters () {
        return (
        <>
            <h2 className={style.heroCount}>Total de heróis: {total}</h2>
            {characters.map(character => {
                    return <Card heroName={character.name} heroSubtitle={character.description} heroImage={character.thumbnail.path+'.jpg'}/>
                })}
        </>
        )
    }
 



    return (
        <div className='body-card'>
            <article className={style.cardArticle}>
                <ContentCharacters />
            </article>
        </div>
    )
}

