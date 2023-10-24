import styles from './Card.module.scss';
import { useDispatch } from "react-redux";
import {removeCard, toggleFavorite} from "../../redux/store.js";

const Card = ({id, isFavorite, title}) => {
    const dispatch = useDispatch();

    const toggleFavorites = () => {
        console.log(id)
        dispatch(toggleFavorite(id));
    };

    const handleRemove =() => {
        dispatch(removeCard(id))
    }

    return (
        <li className={styles.card}>
            <span>{title}</span>
            <div>
            <button onClick={handleRemove} className={styles.remove}>
                <i className="fa fa-trash"/>
            </button>
            <button onClick={toggleFavorites}
                    className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}>
                <i className="fa fa-star-o"/>
            </button>
            </div>
        </li>
    );
};

export default Card;
