import React from 'react';
import Container from "../Container/Container.jsx";
import style from './navbar.module.scss'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>


            <span className={style.navbar__icon + ' fa fa-tasks'}/>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}><NavLink className={({ isActive }) => isActive ? style.linkActive : style.navbar__item}
                             to="/">Home</NavLink></li>
                <li className={style.navbar__item}><NavLink className={({ isActive }) => isActive ? style.linkActive : style.navbar__item}
                                                            to="/favorite">Favorite</NavLink></li>
                <li className={style.navbar__item}><NavLink className={({ isActive }) => isActive ? style.linkActive : style.navbar__item}
                                                            to="/about">About</NavLink></li>
            </ul>


        </nav>
    );
};

export default Navbar;