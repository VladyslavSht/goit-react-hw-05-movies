import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trendingFilms } from "api/movieSearcher";
import styles from "./HomePage.module.css";

const HomePage = () => {
    const [film, setFilm] = useState([]);


    useEffect(() => {
        trendingFilms().then(response => {
            const trends = response.data.results.map(({ title, id }) => {
                return {title: title, id: id}
            })
            setFilm([...trends])
        }).catch(error => console.log(error))
    }, [])
    

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Trending today</h1>
            <ul className={styles.trends}>
                {film.length > 0 && (
                    film.map(({ id, title }) => {
                        return <li className={styles.movie__item} key={id}>
                            <Link className={styles.movie__link} to={`movies/${id}`}>{title}</Link>
                        </li>
                    })
                    )
                }
            </ul>
        </div>
    );
};

export default HomePage;