import Card from '../../../Characters/card/Card';

function ContentCharacters(props) {
    return (
        <>
            {props.characters.map(character => {
                let description =
                    character.description.length <= 0
                        ? 'Character description not found!'
                        : character.description;

                return (
                    <div key={character.id}>
                        <Card
                            heroName={character.name}
                            heroSubtitle={description}
                            heroImage={character.thumbnail.path + '.jpg'}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default ContentCharacters;
