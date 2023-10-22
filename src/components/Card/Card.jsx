import styles from './Card.module.scss';
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/store.js";

const Card = ({id, isFavorite, title}) => {
    const dispatch = useDispatch();

    const toggleFavorites = () => {
        console.log(id)
        dispatch(toggleFavorite(id));
    };

    return (
        <li className={styles.card}>{title}
            <button onClick={toggleFavorites}
                    className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}>
                <i className="fa fa-star-o"/>
            </button>
        </li>
    );
};

export default Card;
