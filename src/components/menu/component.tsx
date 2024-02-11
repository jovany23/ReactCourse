import { Dish } from "../../Models/dish";
import MenuItem from "../menu-item/component";

const Menu = ({ dishes }: {dishes:  Dish[]}) => {
    return ( 
        <div>
            <ul>
                {dishes.map((dish) => (<li key={dish.id}><MenuItem {...dish} /></li>))}
            </ul>
        </div>
    );
}

export default Menu;