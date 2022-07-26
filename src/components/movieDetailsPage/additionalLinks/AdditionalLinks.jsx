import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./AdditionalLinks.module.css";
import homePageStyles from "../../homePage/HomePage.module.css";

const AdditionalLinks = () => {
    return (
        <div>
            <h2 className={styles.title}>Additional information:</h2>
            <ul className={homePageStyles.trends}>
                <li className={homePageStyles.movie__item}>
                    <NavLink className={homePageStyles.movie__link} to="cast">Cast</NavLink>
                </li>
                <li className={homePageStyles.movie__item}>
                    <NavLink className={homePageStyles.movie__link} to="reviews">Review</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default AdditionalLinks;