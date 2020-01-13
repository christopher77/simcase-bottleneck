import React from "react";
import styles from "./RemainingCircle.module.css";
import classNames from "classnames";

export default function RemainingCircle({
  currentAvailable,
  totalMachines = 2
}) {
  const machinesLeftPercent = (currentAvailable / totalMachines) * 100;
  const strokeFill = `${machinesLeftPercent}, 100`;

  return (
    <>
      <svg viewBox={"0 0 37 37"} className={styles.circularChart}>
        <path
          className={styles.circleBg}
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={classNames(styles.circle, {
            [styles.hideCircle]: !currentAvailable
          })}
          strokeDasharray={strokeFill}
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <foreignObject x="8" y="5" width="20" height="20">
          <div
            className={classNames(styles.number, {
              [styles.disabledNumber]: !currentAvailable
            })}
          >
            {currentAvailable}
            <div className={styles.name}>
              {!!currentAvailable ? "Remain Machines" : "No Machines Left"}
            </div>
          </div>
        </foreignObject>
      </svg>
    </>
  );
}
