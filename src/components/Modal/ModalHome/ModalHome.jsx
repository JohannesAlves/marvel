import style from './style.module.css';

export default function ModalHome({ title, description, pageCount }) {
    return (
        <>
            <div className={style.title_comic_div}>
                <h2>Title Comic:</h2>
                <p className={style.p}>{title}</p>
            </div>

            <div className={style.description_comic_div}>
                <h2>Description Comic:</h2>
                <div>
                    <p>{description}</p>
                </div>

                <div>
                    <h3>Comic Pages: {pageCount}</h3>
                </div>
            </div>
        </>
    );
}
