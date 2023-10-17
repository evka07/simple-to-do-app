import style from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.jsx';
import Button from '../Button/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {updateSearch} from "../../redux/store.js";

const SearchForm = () => {
    const searchString = useSelector((state) => state.searchString);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch (updateSearch(searchString) );
    };

    return (
        <form className={style.searchForm} onSubmit={handleSubmit}>
            <TextInput
                placeholder={'Search...'}
                value={searchString}
                onChange={(e) => dispatch({ type: 'UPDATE_SEARCHSTRING', payload: e.target.value })}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
