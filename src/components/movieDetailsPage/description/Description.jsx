import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ title, score, overview, genres }) => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>User score: {score}</p>
      <h2 className={styles.subtitle}>Overview</h2>
      <p className={styles.text}>{overview}</p>
      <h2 className={styles.subtitle}>Genres</h2>
      <p className={styles.text}>
        {genres && genres.map(({ name }) => name + ' ')}
      </p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Description;
