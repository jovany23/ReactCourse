import { Dish } from "../../Models/dish";
import MenuItem from "../menu-item/component";
import styles from "./styles.module.scss";

const Menu = ({ dishes }: {dishes:  Dish[]}) => {
    return ( 
        <div className={styles.root}>
            <ul>
                {dishes.map((dish) => (<li key={dish.id}><MenuItem {...dish} /></li>))}
            </ul>
        </div>
    );
}

export default Menu;