import { Restaurant } from "../../Models/restaurant";
import Menu from "../menu/component";
import ReviewList from "../review-list/component";

const RestaurantItem = ({ restaurant }: { restaurant: Restaurant }) => {
    return (
        <div>
            <p>Название: {restaurant.name}</p>
            <h3>Меню</h3>
            <Menu dishes={restaurant.menu} />
            <h3>Отзывы:</h3>
            <ReviewList reviews={restaurant.reviews} />
        </div>
    );
}
 
export default RestaurantItem;