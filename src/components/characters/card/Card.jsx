import style from './style.module.css'


export default function Card (props) {

    return (
        <>
    <div className={style.containerCard}>
        <article className={style.card}>
            <header className={style.cardThumb}>
                <a href="#">
                    <img src={props.heroImage}/>
                </a>
            </header>
            <div className={style.cardBody}>
                
                <h2 className={style.cardTitle}>
                    <a href="#">{props.heroName}</a>
                </h2>

                <div className={style.cardSubtitle}> {props.heroSubtitle} </div>
                <p class={style.cardDescription}>{props.heroDescription}</p>
            </div>
        </article>
    </div>
        </>
    )
}
//"https://images-na.ssl-images-amazon.com/images/I/61JuZe9hWuL.jpg" 
//