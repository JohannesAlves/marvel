import React from 'react';
import style from './style.module.css';
import MarvelLogo from '../../assets/images/marvel-logo.svg';
import Menu from '../../assets/images/icon-menu.svg';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className={style.nav}>
            <div className={style.marvelLogo}>
                <img src={MarvelLogo} className={style.marvelLogoImg}></img>
            </div>

            <div className={style.menuDiv}>
                <img src={Menu} className={style.menuIcon}></img>
            </div>

            <div className={style.linksNav}>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={style.li}>
                        <Link
                            to="/characters"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            Characters
                        </Link>
                    </li>

                    <li className={style.li}>
                        <Link
                            to="/comics"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            Comics
                        </Link>
                    </li>

                    <li className={style.li}>About</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
