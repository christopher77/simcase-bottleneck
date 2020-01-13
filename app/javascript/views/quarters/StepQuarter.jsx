import React from "react";
import styles from "./Quarters/Quarters.module.css";
import { navigate } from "@reach/router";

const StepQuarter = ({ image, text, roundNumber }) => {
  const nativagateToNews = roundNumber => {
    navigate(`/quarter/${roundNumber}/news`);
  };

  return (
    <>
      <img src={image} className={styles.img} />
      <div className={styles.textContainer}>
        <h3 className={styles.text}>{text}</h3>
      </div>
      <div className={styles.link}>
        <button
          onClick={() => nativagateToNews(roundNumber)}
          className={styles.startButton}
          autoFocus={true}
        >
          START
        </button>
      </div>
    </>
  );
};

export default StepQuarter;
