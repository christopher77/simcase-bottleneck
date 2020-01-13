import React from "react";
import styles from "./Footer.module.css";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import LeftArrowDisabled from "../../assets/leftArrowDisabled.svg";
import { navigate } from "@reach/router";

function Footer({ stepNumber, setStepNumber, dots = true, animation = false }) {
  const circles = dots ? (
    Array.from({ length: 5 }, (_, index) => {
      return (
        <div
          className={`${styles.circle} ${
            index <= stepNumber ? styles.activeCircle : ""
          }`}
          key={index}
        />
      );
    })
  ) : (
    <div className={styles.circleHidden} key={1} />
  );
  const navigateToGame = stepNumber => {
    navigate(`/quarter/${stepNumber + 1}/game`);
  };

  const onClickBackScreen = () => {
    setStepNumber(stepNumber - 1);
  };

  const onClickNextScreen = () => {
    if (dots === false) {
      navigateToGame(stepNumber);
    } else {
      setStepNumber(stepNumber + 1);
    }
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.circlesContainer}>{circles}</div>
      <div className={styles.arrowsContainer}>
        <div className="leftButton">
          <button
            className={
              stepNumber === 0 || dots === false
                ? styles.buttonDisabled
                : styles.button
            }
            onClick={onClickBackScreen}
            disabled={dots === false || stepNumber == 0}
          >
            <img
              className={styles.arrowsSVG}
              src={
                stepNumber === 0 || dots === false
                  ? LeftArrowDisabled
                  : LeftArrow
              }
            />
          </button>
        </div>
        <div className="rightButton">
          <button
            className={`${styles.button} ${
              animation ? styles.animateButton : ""
            }`}
            onClick={onClickNextScreen}
            autoFocus={true}
          >
            <img className={styles.arrowsSVG} src={RightArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
