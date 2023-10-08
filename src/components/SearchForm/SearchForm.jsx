import style from './SearchForm.module.scss'
import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";


const SearchForm = () => {
    return (
        <form className={style.searchForm}>
            <TextInput placeholder={"Search..."}/>
            <Button text="Search"/>
        </form>
    );
};

export default SearchForm;
