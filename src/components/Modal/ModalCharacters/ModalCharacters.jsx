export default function ModalCharacters({ titleCharacter }) {
    console.log(titleCharacter);

    const contentCharacter = titleCharacter.map(title => {
        return <li key={title}>{title}</li>;
    });

    return (
        <>
            <h1>Characters</h1>
            <ul>{contentCharacter}</ul>
        </>
    );
}
