import style from './style.module.css';

export default function Footer() {
    return (
        <div className={style.footer_div}>
            <div className={style.container}>
                <div>
                    <h1 className={style.h1}>Developed with &#10084; by Johannes Alves</h1>
                </div>
                <div>
                    <h2>Data provided by Marvel. © 2022 MARVEL</h2>
                </div>
            </div>
        </div>
    );
}
