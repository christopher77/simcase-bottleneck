import React from "react";
import styles from "./Loading.module.css";
import Truck from "./truck";

function Loading() {
  return (
    <main className={styles.wrapper}>
      <Truck
        className1={styles.line1}
        className2={styles.line2}
        classNameFrontWheel={styles.frontWheel}
        classNameBackWheel={styles.backWheel}
        classNameTruck={styles.truck}
      />
    </main>
  );
}

export default Loading;
