import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ handler }) => {
  return (
    <div className={styles.container__button}>
      <button className={styles.button} type="button" onClick={handler}>
        Go back
      </button>
    </div>
  );
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Button;
