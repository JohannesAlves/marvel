import React from 'react'
import './Nav.css'
import MarvelLogo from '../../../assets/images/marvel-logo.svg'
import Menu from '../../../assets/images/icon-menu.svg'
import { Link } from 'react-router-dom'

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
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/characters'>Characters</Link>
                </li>
                
                <li>Avengers</li>
                <li>About</li>
            </ul>
        </nav>
    )


}

export default Nav