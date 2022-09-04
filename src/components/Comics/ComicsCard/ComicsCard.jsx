import style from './style.module.css';
import Modal from '../../Modal/Modal';
import React from 'react';

export default function ComicsCard({
    image,
    title,
    description,
    pageCount,
    name,
    role,
    titleCharacter,
}) {
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
                        <Modal
                            titleCharacter={titleCharacter}
                            name={name}
                            role={role}
                            image={image}
                            title={title}
                            description={description}
                            pageCount={pageCount}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
