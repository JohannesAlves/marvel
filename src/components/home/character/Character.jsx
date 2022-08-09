import style from './style.module.css';

function Character() {

    return (
        <section className={style.characterSection}>
            <div>
                <h4 className={style.marvelCharacter}>Marvel Character</h4>
                <h1 className={style.heroName}>IRON MAN</h1>
            </div>

            <div>
                <h2 className='hero-real-name'>Tony Stark</h2>
                <p className={style.heroDescription}>Iron Man is a superhero appearing in American comic books published by Marvel Comics. 
                    Each of Tony’s suits provides a full range of telecommunications, sophisticated artificial 
                    intelligence capable of piloting Tony to safety should he be rendered unconscious.</p>
            </div>

            <div className={style.divAbout}>
                <button className={style.heroAbout}>About</button>
            </div>
        </section>
    )
}

export default Character