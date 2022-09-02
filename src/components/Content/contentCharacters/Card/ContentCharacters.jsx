import notFound from '../../../../assets/images/notFound.jpg';
import Card from '../../../Characters/card/Card';

function ContentCharacters(props) {
    return (
        <>
            {props.characters.map(character => {
                let description =
                    character.description.length <= 0
                        ? 'Character description not found!'
                        : character.description;

                let image =
                    character.thumbnail.path ===
                    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                        ? notFound
                        : character.thumbnail.path + '.jpg';

                return (
                    <div key={character.id}>
                        <Card
                            heroName={character.name}
                            heroSubtitle={description}
                            heroImage={image}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default ContentCharacters;
