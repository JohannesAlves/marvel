import style from './style.module.css';

export default function ModalHome() {
    return (
        <>
            <div className={style.title_comic_div}>
                <h2>Title Comic:</h2>
                <p>Teste</p>
            </div>

            <div className={style.description_comic_div}>
                <h2>Description Comic:</h2>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nulla adipisci saepe optio nesciunt dignissimos
                        eaque iusto, dolor accusantium enim, libero officiis
                        rerum, accusamus quod. Porro ea voluptatibus accusamus
                        aliquam minima!
                    </p>
                </div>

                <div>
                    <h3>Comic Pages: 33</h3>
                </div>
            </div>
        </>
    );
}
