import style from './style.module.css';

export default function Card({ title, description, link, charactersImage }) {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <a href={link}>
                    <img className={style.img} src={charactersImage}></img>
                </a>

                <div className={style.content}>
                    <a className={style.title} href={link}>
                        {title}
                    </a>
                </div>

                <div className={style.arrow}>
                    <span>&#8673;</span>
                </div>
            </div>
        </div>
    );
}
