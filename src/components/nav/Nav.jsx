import React from 'react';
import style from './style.module.css';
import MarvelLogo from '../../assets/images/marvel-logo.svg';
import Menu from '../../assets/images/icon-menu.svg';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

function Nav() {
    const [isMobileNav, setisMobileNav] = useState(false);

    const handleMobileNav = () => {
        setisMobileNav(!isMobileNav);
    };

    const handleLi = () => {
        setisMobileNav(false);
    };

    if (isMobileNav) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
    return (
        <nav className={isMobileNav ? style.mobile_nav : style.nav}>
            <div className={style.marvelLogo}>
                <a href="/">
                    <img src={MarvelLogo} className={isMobileNav ? style.hiddenLogo : style.marvelLogoImg}></img>
                </a>
            </div>

            <div className={style.menuDiv}>
                <img
                    src={Menu}
                    className={isMobileNav ? style.menu_mobile_icon : style.menuIcon}
                    onClick={handleMobileNav}
                ></img>
            </div>

            <div className={isMobileNav ? style.mobile_linksNav : style.linksNav}>
                {isMobileNav && (
                    <div>
                        <span onClick={handleMobileNav} className={style.mobile_btn_close}>
                            X
                        </span>
                    </div>
                )}

                <ul className={isMobileNav ? style.mobile_nav_ul : style.ul}>
                    <li className={isMobileNav ? style.mobile_nav_li : style.li} onClick={handleLi}>
                        <Link to="/" className={isMobileNav ? style.mobile_nav_a : style.a}>
                            Home
                        </Link>
                    </li>
                    <li className={isMobileNav ? style.mobile_nav_li : style.li} onClick={handleLi}>
                        <Link to="/characters" className={isMobileNav ? style.mobile_nav_a : style.a}>
                            Characters
                        </Link>
                    </li>

                    <li className={isMobileNav ? style.mobile_nav_li : style.li} onClick={handleLi}>
                        <Link to="/comics" className={isMobileNav ? style.mobile_nav_a : style.a}>
                            Comics
                        </Link>
                    </li>

                    <li className={isMobileNav ? style.mobile_nav_li : style.li} onClick={handleLi}>
                        <Link to="/about" className={isMobileNav ? style.mobile_nav_a : style.a}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
