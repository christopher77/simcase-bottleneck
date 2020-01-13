import React from "react";
import styles from "./Flag.module.css";
import greenFlag from "../../../assets/green-flag.svg";
import redFlag from "../../../assets/red-flag.svg";

function Flag({ isCorrect, flagDirection, numStation }) {
  const flagImage = isCorrect ? greenFlag : redFlag;
  const classStyle =
    (flagDirection == "left" ? "flagLeft" : "flagRight") + numStation;
  return (
    <>
      <img src={flagImage} className={styles[classStyle]} />
    </>
  );
}

export default Flag;
