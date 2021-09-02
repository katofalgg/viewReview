import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addReview } from '../../Redux/actions';
import NewReviewInput from './NewReviewInput.tsx';
import classes from './Review.module.css';

const Review: React.FC  = () => {
    const reviews = useSelector(
        /* @ts-ignore */
    (state) => state.reviews.reviews);

    const dispatch = useDispatch();

    const onAddReview = (review: string) => {
        dispatch(addReview(review));
      };
    return( 
        <div className={classes.main_field}>
                <h1>Поле для добавления рецензий</h1>
                <NewReviewInput addReview={onAddReview}/>
                <ul>
                    {reviews.length > 0 ? reviews.map((review) => {
                        return <div className={classes.sign}><li key={review}>{review}</li></div>
                    }) : <h3>Рецензий нет</h3>}
                    {console.log(reviews)}
                </ul>
        </div>
    )
}
export default Review;