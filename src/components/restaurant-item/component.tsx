import { Restaurant } from "../../Models/restaurant";
import Menu from "../menu/component";
import ReviewList from "../review-list/component";
import styles from "./styles.module.scss";

const RestaurantItem = ({ restaurant }: { restaurant: Restaurant }) => {
    return (
        <div className={styles.root}>
            <p className={styles['restaurant-name']}>{restaurant.name}</p>
            <p><h3>Меню</h3></p>
            <Menu dishes={restaurant.menu} />
            <h3>Отзывы:</h3>
            <ReviewList reviews={restaurant.reviews} />
        </div>
    );
}
 
export default RestaurantItem;