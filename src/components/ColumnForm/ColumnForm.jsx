import {useState} from 'react';
import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import styles from './ColumnForm.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {addColumn} from "../../redux/store.js";

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const listId = "1"

        dispatch( addColumn({title, icon, listId: props.listId}));
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <span>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;