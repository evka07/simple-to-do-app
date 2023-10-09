import styles from './ColumnForm.module.scss';
import {useState} from "react";

const ColumnForm = (props) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        props.addColumn({ title: value });
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button>Add column</button>
        </form>
    );
};

export default ColumnForm;