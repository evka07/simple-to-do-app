import React from 'react';
import style from './Column.module.scss';
import Card from '../Card/Card.jsx';
import CardForm from '../CardForm/CardForm.jsx';
import { useSelector } from 'react-redux';
import {getFilteredCards} from "../../redux/store.js";

const Column = (props) => {


    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={style.column}>
            <h2 className={style.title}>
                {props.title}
                <span className={style.icon + ' fa fa-' + props.icon} />
            </h2>
            <ul className={style.cards}>
                {cards.map((card) => (
                    <Card key={card.id} title={card.title}  id={card.id} isFavorite={card.isFavorite}/>
                ))}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    );
};

export default Column;
