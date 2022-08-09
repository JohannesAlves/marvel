import React from 'react'
import CharacterImg from '../../../assets/images/iron-man.png'
import style from './style.module.css'

function CharacterImage() {

    return (
        <div className={style.characterImgDiv}>
            <img className={style.characterImg} src={CharacterImg}></img>
        </div>
    )
}

export default CharacterImage