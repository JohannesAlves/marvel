import './card.css'


export default function Card (props) {

    return (
        <>
    <div className='container-card'>
        <article class="card">
            <header class="card__thumb">
                <a href="#"><img src={props.heroImage}/></a>
            </header>
            <div class="card__body">
                <h2 class="card__title"><a href="#">{props.heroName}</a></h2>
                <div class="card__subtitle"> {props.heroSubtitle} </div>
                <p class="card__description">{props.heroDescription}</p>
            </div>
        </article>
    </div>
        </>
    )
}
//"https://images-na.ssl-images-amazon.com/images/I/61JuZe9hWuL.jpg" 
//