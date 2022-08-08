import React from 'react'
import CharacterImg from '../../assets/images/iron-man.png'
import './CharacterImage.css'

function CharacterImage() {

    return (
        <div className='character-img-div'>
            <img className='character-img' src={CharacterImg}></img>
        </div>
    )
}

export default CharacterImage