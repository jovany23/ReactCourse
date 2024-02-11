import { Review } from "../../Models/review";
import ReviewItem from "../review-item/component";

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
    return (
        <ul>
            {reviews.map((x) => (<li key={x.id}><ReviewItem review={x} /></li>))}
        </ul>
    );
}
 
export default ReviewList;