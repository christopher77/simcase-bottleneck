import React from "react";
import Flag from "../ui/Flag/Flag.jsx";
import styles from "./StationBox.module.css";
import classNames from "classnames";

function StationBox(props) {
  const {
    numStation,
    station,
    machinesAvailable,
    round,
    feedback = false,
    flagDirection,
    expectedMachines,
    buttonRef
  } = props;

  const addMachines = station => {
    if (machinesAvailable > 0) {
      props.addMachinesToStation(station, round);
      props.decrementMachinesAvailable(round);
    }
    buttonRef.current.focus();
  };

  const isCorrect =
    station.machinesAssigned ===
    Object.values(expectedMachines)[numStation - 1];
  const classStyle = `buttonContainer${numStation}`;

  return (
    <div className={styles[classStyle]}>
      <Flag
        isCorrect={!feedback || isCorrect}
        solution={station.solution}
        numStation={numStation}
        flagDirection={flagDirection === "left" ? "left" : "right"}
      />
      <button
        className={classNames([styles.button], {
          [styles.buttonCorrect]: feedback && isCorrect,
          [styles.buttonFail]: feedback && !isCorrect
        })}
        onClick={() => addMachines(numStation)}
        disabled={feedback}
      >
        {station.machinesAssigned}
        {!isCorrect && (
          <sup>
            {feedback && Object.values(expectedMachines)[numStation - 1]}
          </sup>
        )}
      </button>
      <h5
        className={classNames([styles.capitalLetter], {
          [styles.capitalLetter]: feedback && isCorrect,
          [styles.capitalWrong]: feedback && !isCorrect
        })}
      >
        {station.stationName}
      </h5>
    </div>
  );
}

export default StationBox;
