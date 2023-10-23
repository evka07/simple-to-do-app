import React from 'react';
import {useSelector} from "react-redux";
import {getFavorite} from "../../redux/store.js";
import Card from "../../components/Card/Card.jsx";
import style from './Favorite.module.scss'

const Favorite = () => {
    const favoriteCards = useSelector(state => getFavorite(state))
    return (
        <div className={style.favorite}>
            <h1>Favorite</h1>
            {favoriteCards.length === 0 ? (
                <div className={style.noItem}>No Item</div>
            ) : (
                <nav className={style.navbar}>
                    <ul className={style.cards}>
                        {favoriteCards.map((card) => (
                            <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Favorite;