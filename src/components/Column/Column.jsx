import React from 'react';
import style from './Column.module.scss'
import Card from "../Card/Card.jsx";
import CardForm from "../CardForm/CardForm.jsx";

const Column = (props) => {
    return (
        <article className={style.column}>
            <h2 className={style.title}>{props.title}
                <span className={style.icon + ' fa fa-' + props.icon} />
            </h2>
            <ul className={style.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id}  action={props.addCard}/>
        </article>

    );
};

export default Column;