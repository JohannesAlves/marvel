import Card from './Card/Card';
import style from './style.module.css';
import characterImage from '../../assets/images/characters.jpg';
import comics from '../../assets/images/comics.jpg';
import johannesImage from '../../assets/images/johannes.jpg';

export default function Home() {
    return (
        <>
            <main className={style.main}>
                <article className={style.cards}>
                    <Card
                        title={'CHARACTERS'}
                        description={'desc'}
                        link={'/characters'}
                        charactersImage={characterImage}
                    />
                    <Card title={'COMICS'} description={'desc'} link={'/comics'} charactersImage={comics} />
                    <Card title={'ABOUT'} description={'desc'} link={'/about'} charactersImage={johannesImage} />
                </article>
            </main>
        </>
    );
}
