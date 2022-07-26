import React from 'react';
import styles from "./NotFound.module.css";


const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Error 404. Page not found :(</h1>
        </div>
    )
};

export default NotFound;