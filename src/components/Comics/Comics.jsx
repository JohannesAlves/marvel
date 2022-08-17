import React from 'react';
import style from './style.module.css';
import marvelComicsLogo from '../../assets/images/marvelcomics.png';
import comic from '../../assets/images/comic.jpg';
import Modal from '../Modal/Modal';

export default function Avengers() {
    return (
        <>
            <div className={style.cards}>
                <div className={`${style.card} ${style.card1}`}>
                    <div className={style.container}>
                        <img
                            className={style.img_comic}
                            src={comic}
                            alt="las vegas"
                        />
                    </div>
                    <div className={style.details}>
                        <h3 className={style.h3}>Ultimate X-Men</h3>
                        <Modal />
                    </div>
                </div>
            </div>
        </>
    );
}
