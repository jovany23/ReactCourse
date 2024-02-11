import { Dish } from "../../Models/dish";

const MenuItem = (dish: Dish) => {
    return (<span>{ dish.name } ${ dish.price } { dish.ingredients }</span>);
}
 
export default MenuItem;