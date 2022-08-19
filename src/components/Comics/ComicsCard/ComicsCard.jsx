import style from './style.module.css';
import Modal from '../../Modal/Modal';
import React from 'react';

export default function ComicsCard({ image, title }) {
    return (
        <>
            <div className={style.cards} key={title}>
                <div className={`${style.card} ${style.card1}`}>
                    <div className={style.container}>
                        <img
                            className={style.img_comic}
                            src={image}
                            alt="las vegas"
                        />
                    </div>
                    <div className={style.details}>
                        <div className={style.title_div}>
                            <h3 className={style.h3}>{title}</h3>
                        </div>
                        <Modal />
                    </div>
                </div>
            </div>
        </>
    );
}
