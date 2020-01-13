import React from "react";
import styles from "./LazySquare.module.css";

const LazySquare = () => {
  return (
    <div className={styles.lazyItem}>
      <p className={styles.loadingDots}></p>
    </div>
  );
};

export default LazySquare;
