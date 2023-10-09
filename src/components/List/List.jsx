import style from "./List.module.scss"
import Column from "../Column/Column.jsx";
import {useEffect, useState} from "react";
import shortid from 'shortid';
import ColumnForm from "../ColumnForm/ColumnForm.jsx";


const List = () => {
    const [columns, setColumns] = useState([
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' }
    ]);

    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title }]);
    };


    return <div>
        <header className={style.header}>
            <h2 className={style.title}>Things to do<span>soon!</span></h2>
        </header>
        <p className={style.description}>Interesting things I want to check out</p>
        <section className={style.columns}>
            {columns.map((colum) => (
                <Column key={colum.id} title={colum.title} icon={colum.icon}/>
            ))}
        </section>
        <ColumnForm  addColumn={addColumn}/>
    </div>;
};

export default List;
