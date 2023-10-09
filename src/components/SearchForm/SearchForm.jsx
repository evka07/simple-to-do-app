import style from './SearchForm.module.scss'
import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";


const SearchForm = () => {
    return (
        <form className={style.searchForm}>
            <TextInput placeholder={"Search..."}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
