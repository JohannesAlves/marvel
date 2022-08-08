import React from 'react'
import './Nav.css'
import MarvelLogo from '../../assets/images/marvel-logo.svg'
import Menu from '../../assets/images/icon-menu.svg'

function Nav (props) {
    
    return (
        <nav>
            <div>
                <img src={MarvelLogo} className='marvel-logo'></img>
            </div>

                <div className='menu-div'>
                <img src={Menu} className='menu-icon'></img>
                </div>

            <ul>
                <li>Home</li>
                <li>Avengers</li>
                <li>Characters</li>
                <li>About</li>
            </ul>
        </nav>
    )


}

export default Nav