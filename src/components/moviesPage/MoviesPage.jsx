import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, createSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { searchedFilms } from 'api/movieSearcher';
import styles from './MoviesPage.module.css';
import homePageStyles from '../homePage/HomePage.module.css';

Notify.init({
  timeout: 3000,
  warning: {
    background: 'rgb(255, 124, 16)',
    Color: 'rgb(0, 0, 0)',
    flixIconColor: 'rgba(0,0,0)',
  },
});

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('query'));
  const [searchFilm, setSearchFilm] = useState([]);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    searchedFilms(movieName)
      .then(response => {
        if (response.data.results.length === 0) {
          return Notify.warning(
            'There is no movie with this name in the database!'
          );
        }
        const found = response.data.results.map(({ title, id }) => {
          return { title: title, id: id };
        });
        setSearchFilm([...found]);
      })
      .catch(error => console.log(error));

    setSearchParams(createSearchParams({ query: movieName }));
  }, [movieName, setSearchParams]);

  const inputHandler = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setMovieName(value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>
          <input
            className={styles.form__input}
            placeholder="Enter movie name..."
            type="text"
            value={value}
            onChange={inputHandler}
          ></input>
        </label>
        <button className={styles.form__button} type="submit">
          Search
        </button>
      </form>
      <ul className={homePageStyles.trends}>
        {searchFilm.length > 0 &&
          searchFilm.map(({ id, title }) => {
            return (
              <li key={id} className={homePageStyles.movie__item}>
                <Link to={`${id}`} className={homePageStyles.movie__link}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
