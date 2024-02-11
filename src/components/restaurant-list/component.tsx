import { Restaurant } from '../../Models/restaurant';
import RestaurantItem from '../restaurant-item/component';

interface Props {
    restaurants: Restaurant[];
}

const RestaurantList = ({ restaurants }:  Props) => {
    return (
        <div>
            {restaurants.map((x : Restaurant) => (<RestaurantItem restaurant={x} key={x.id}/>))}
        </div>
    );
}

export default RestaurantList;