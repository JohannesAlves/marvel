import React from 'react'
import './Nav.css'
import MarvelLogo from '../../assets/images/marvel-logo.svg'

function Nav (props) {
    

    return (
        <nav>
            <div>
                <img src={MarvelLogo} className='marvel-logo'></img>
            </div>
            <ul>
                <li>Home</li>
                <li>Avengers</li>
                <li>Celestials</li>
                <li>About</li>
            </ul>
        </nav>
    )


}

export default Nav