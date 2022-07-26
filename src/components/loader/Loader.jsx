import React from "react";
import styles from "./Loader.module.css";
import { Puff } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={styles.container}>
            <Puff color="rgb(76, 156, 241)" height={200} width={200} />
        </div>
    );
};

export default Loader;