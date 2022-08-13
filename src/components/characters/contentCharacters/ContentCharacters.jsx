import Card from '../card/Card'

    function ContentCharacters (props) {
        return (
        <>
            {props.characters.map(character => {
                    return <Card heroName={character.name} heroSubtitle={character.description} heroImage={character.thumbnail.path+'.jpg'}/>
                })}
        </>
        )
    }

    export default ContentCharacters

