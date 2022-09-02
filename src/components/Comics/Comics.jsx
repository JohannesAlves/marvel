import React from 'react';
import { useState, useEffect } from 'react';
import style from './style.module.css';
import ContentComicsCard from '../Content/ContentComicsCard/ContentComicsCard';
import md5 from 'md5';
import Loading from '../LoadingSpinner/Loading';
import SearchBar from '../SearchBar/SearchBar';

export default function Avengers() {
    const [cards, setCards] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    const fetchData = () => {
        const apiKey = '4f81be65ec9847a1f604eb1c0a55d48b';
        const privateKey = import.meta.env.VITE_PRIVATE_KEY;
        let timestamp = new Date().getTime();
        let hash = md5(timestamp + privateKey + apiKey);

        let url = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=20`;

        fetch(url)
            .then(response => response.json())
            .then(comics => {
                const { data } = comics;
                setCards(data.results);
                setRemoveLoading(true);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!removeLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className={style.card_comics}>
                <ContentComicsCard cards={cards} />
            </div>
        </>
    );
}
