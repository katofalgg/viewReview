import React, {useState, useEffect} from 'react';

interface NewReviewInputProps {
    addReview(review: string): void;
}

const NewReviewInput: React.FC<NewReviewInputProps> = ({addReview}) => {
    const [reviewText, setReviewText] = useState('')

    const updateReview = (event) => {
        setReviewText(event.target.value);
    }
    const onAddReviewClick = () => {
        if (reviewText) {
            addReview(reviewText);
            setReviewText('');
        }
    }
    return (
        <>
      <textarea
          name='note'
          placeholder='Добавить рецензию'
          onChange={updateReview}
          value={reviewText}
      />
            <button onClick={onAddReviewClick}>Добавить</button>
        </>
    )
}
export default NewReviewInput;
