import './Character.css'

function Character() {

    return (
        <section className='character-section'>
            <div>
                <h4 className='marvel-character'>Marvel Character</h4>
                <h1 className='hero-name'>IRON MAN</h1>
            </div>

            <div>
                <h2 className='hero-real-name'>Tony Stark</h2>
                <p className='hero-description'>Iron Man is a superhero appearing in American comic books published by Marvel Comics. 
                    Each of Tony’s suits provides a full range of telecommunications, sophisticated artificial 
                    intelligence capable of piloting Tony to safety should he be rendered unconscious.</p>
            </div>

            <div class='div-about'>
                <button class='hero-about'>About</button>
            </div>
        </section>
    )
}

export default Character