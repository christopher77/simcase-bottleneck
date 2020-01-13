import React from "react";
import yearEnd from "../../../assets/News/yearEnd.svg";
import styles from "./YearEnd.module.css";
import { navigate } from "@reach/router";
import ImageSvg from "../../../components/ui/ImageSvg";

function YearEnd(props) {
  const { success } = props;
  const getTotalScore = totalScore => props.setTotalScore(totalScore);
  const getHitsRate = () =>
    props.getSuccessRate(((success / 20) * 100).toFixed(2));

  function navigateToFinalScore() {
    getTotalScore();
    getHitsRate();
    navigate("/finalscore");
  }

  return (
    <div className={styles.screenContainer}>
      <ImageSvg src={yearEnd} alt="year-end-image" />
      <div className={styles.contentContainer}>
        <h4 className={styles.congrats}>congratulations</h4>
        <h4>The calendar year is at a close.</h4>
        <h4>
          See how your plant performed relative to your peers and decide if you
          want to try again
        </h4>
      </div>
      <button
        className={styles.resultsButton}
        onClick={navigateToFinalScore}
        autoFocus={true}
      >
        results
      </button>
    </div>
  );
}

export default YearEnd;
