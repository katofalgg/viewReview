import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addReview} from '../../Redux/actions';
import { RootState } from '../../Redux/store';
import NewReviewInput from './NewReviewInput.tsx';
import classes from './Review.module.css';

const Review: React.FC = () => {
    const reviews = useSelector(
        (state: RootState) => state.reviews.reviews);

    const dispatch = useDispatch();

    const onAddReview = (review: string) => {
        dispatch(addReview(review));
    };
    return (
        <div className={classes.main_field}>
            <h1>Поле для добавления рецензий</h1>
            <NewReviewInput addReview={onAddReview}/>
            <ul>
                {reviews.length > 0 ? reviews.map((review) => {
                    return <div className={classes.sign}>
                        <li key={review}>{review}</li>
                    </div>
                }) : <h3>Рецензий нет</h3>}
            </ul>
        </div>
    )
}
export default Review;
