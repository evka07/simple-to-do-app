import React from 'react';
import style from './Column.module.scss'

const Column = (props) => {
    return (
        <article className={style.column}>
            <h2 className={style.title}>{props.title}
                <span className={style.icon + ' fa fa-' + props.icon} />
            </h2>
        </article>
    );
};

export default Column;