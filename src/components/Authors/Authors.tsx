import React from "react";
import { useState } from "react";
import { sendRequest } from "../Request";

const Authors: React.FC  = () => {
    const [reviewId,setReviewId] = useState<number>();
    const [page, setPage] = useState(1);

    const requestURL = `https://kinopoiskapiunofficial.tech/api/v1/reviews/details?reviewId=${reviewId}`;

    // const reviewFetch = async () => await sendRequest('GET', requestURL)
    // .then(response => {
    //     setReviewId
    // })
    return( 
        <>
            <h1>Рецензии</h1>
        </>
    )
}
export default Authors;