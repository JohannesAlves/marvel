import Card from './card/Card'
import style from './style.module.css'
import { useEffect } from 'react';
import md5 from 'md5'
import { useState } from 'react';



export default function Characters () {
    const [total, setTotal] = useState(0);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const apiKey = '4f81be65ec9847a1f604eb1c0a55d48b';
        let timestamp = new Date().getTime();
        let hash = md5(timestamp+privateKey+apiKey)


        let url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=100`

        let settings = {
            method: 'GET',
        }

        fetch(url, settings)
        .then(response => response.json())
        .then(characters => {
            const {data} = characters
            setTotal(data.total)
            setCharacters(data.results)
        })
        .catch(err => err.json())
    }, [])



    return (
        <div className='body-card'>
            <h2>Total de heróis: {total}</h2>
            <article className={style.cardArticle}>
                {characters.map(character => {
                    console.log(character.thumbnail.path)
                    return <Card heroName={character.name} heroSubtitle={character.description} heroImage={character.thumbnail.path+'.jpg'}/>
                })}
            </article>
        </div>
    )
}