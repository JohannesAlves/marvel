import Card from '../../characters/card/Card'

    function ContentCharacters (props) {
        return (
        <>
            {props.characters.map(character => {
                    return (
                    <div key={character.id}>
                        <Card heroName={character.name} heroSubtitle={character.description} heroImage={character.thumbnail.path+'.jpg'}/>
                    </div>
                    )
                })}
        </>
        )
    }

    export default ContentCharacters

