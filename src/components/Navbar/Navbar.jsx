import React from 'react';
import Container from "../Container/Container.jsx";
import style from './navbar.module.scss'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>


            <span className={style.navbar__icon + ' fa fa-tasks'}/>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}><Link to='/'>Home</Link></li>
                <li className={style.navbar__item}><Link to='/favorite'>Favorite</Link></li>
                <li className={style.navbar__item}><Link to='/about' >About</Link></li>
            </ul>


        </nav>
    );
};

export default Navbar;