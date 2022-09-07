export default function ModalCharacters({ titleCharacter }) {
    const nameCharacter = titleCharacter.map(title => {
        return <li key={title.name}>{title.name}</li>;
    });

    const validateNameCharacter = nameCharacter.length <= 0 ? <p>Characters not found!</p> : nameCharacter;

    return (
        <>
            <h1>Characters</h1>
            <ul>{validateNameCharacter}</ul>
        </>
    );
}
