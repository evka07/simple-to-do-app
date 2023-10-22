import React from 'react';
import {useSelector} from "react-redux";
import {getFavorite} from "../../redux/store.js";
import Card from "../../components/Card/Card.jsx";

const Favorite = () => {
    const favoriteCards = useSelector(state => getFavorite(state))
    return (
        <div>
            <h1>Favorite</h1>
            {favoriteCards.map((card) => (
                <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>
            ))}
        </div>
    );
};

export default Favorite;