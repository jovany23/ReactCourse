import { Review } from './review';
import { Dish } from './dish';

export type Restaurant = {
    id: string;
    name: string;
    menu: Dish[];
    reviews: Review[];
}