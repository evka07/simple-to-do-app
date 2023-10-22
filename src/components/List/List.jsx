import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import {getListById, getColumnByList} from '../../redux/store.js';
import {Navigate, useParams} from 'react-router-dom';
import SearchForm from "../SearchForm/SearchForm.jsx";


const List = () => {
    const {listId} = useParams();
    const listData = useSelector((state) => getListById(state, listId));
    const columns = useSelector((state) => getColumnByList(state, listId));
    const dispatch = useDispatch()
    const searchString = useSelector((state) => state.searchString)

    if (!listData) return <Navigate to="/"/>

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm searchString={searchString} dispatch={dispatch}/>
            <section className={styles.columns}>
                {columns.map((column) => (
                    <Column key={column.id} {...column} />
                ))}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    );
};

export default List;
