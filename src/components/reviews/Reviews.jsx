import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { filmReview } from 'api/movieSearcher';
import styles from "./Reviews.module.css";


const Reviews = () => {
    const [review, setReview] = useState([]);
    const id = useParams().movieId;

    useEffect(() => {
        if (!id) {
            return
        };

        filmReview(id).then(response => setReview(response.data.results)).catch(error => console.log(error));
    }, [id]);


    return (
        <div>
            <h1 className={styles.title}>Reviews</h1>
            <ul className={styles.reviws__list}>
                {review.map(({ id, author, content }) => {
                    return <li key={id} className={styles.review}>
                        <h2 className={styles.author}>{author}</h2>
                        <p className={styles.text}>{content}</p>
                    </li>
                })}
            </ul>
        </div>
    )
};

export default Reviews;