import style from './style.module.css';

export default function Card(props) {
    return (
        <>
            <div className={style.containerCard}>
                <article className={style.card}>
                    <header className={style.cardThumb}>
                        <a>
                            <img src={props.heroImage} />
                        </a>
                    </header>
                    <div className={style.cardBody}>
                        <h2 className={style.cardTitle}>
                            <a>{props.heroName}</a>
                        </h2>

                        <div className={style.cardSubtitle}> {props.heroSubtitle} </div>
                        <p className={style.cardDescription}>{props.heroDescription}</p>
                    </div>
                </article>
            </div>
        </>
    );
}
