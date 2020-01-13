import React from "react";
import styles from "./LazyImages.module.css";

const LazyImages = () => {
  return (
    <div className={styles.lazyItem}>
      <p className={styles.loadingDots}>...</p>
    </div>
  );
};

export default LazyImages;
