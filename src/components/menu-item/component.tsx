import { Dish } from "../../Models/dish";
import styles from "./styles.module.scss";

const MenuItem = (dish: Dish) => {
    return (<span className={styles.root}>{ dish.name } ${ dish.price } { dish.ingredients }</span>);
}
 
export default MenuItem;