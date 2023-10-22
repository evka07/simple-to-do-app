import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addList} from "../../redux/store.js";
import styles from "../ColumnForm/ColumnForm.module.scss";
import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/TextInput.jsx";

const ListForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() !== '') {
            dispatch(addList({title, description}))
            setTitle('')
            setDescription('')
        }
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span><TextInput value={title} onChange={(e) => setTitle(e.target.value)}/>
            <span>Icon:</span><TextInput value={description} onChange={(e) => setDescription(e.target.value)}/>
            <Button>Add List</Button>
        </form>
    );
};

export default ListForm;