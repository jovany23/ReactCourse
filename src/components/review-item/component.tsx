import { Review } from "../../Models/review";

const ReviewItem = ({review}: {review: Review}) => {
    return (
        <div>
            <span>Рейтинг: { review.rating }</span><br/>
            <span>Автор: { review.user }</span><br/>
            <span>Отзыв: { review.text }</span>
        </div>
    );
}
 
export default ReviewItem;