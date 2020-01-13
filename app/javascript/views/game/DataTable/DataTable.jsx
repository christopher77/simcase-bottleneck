import React from "react";
import styles from "./DataTable.module.css";
import Station from "../../../components/Station/Station";
import classNames from "classnames";

function DataTable(props) {
  const { stations, demand, feedback, flowRate } = props;
  const dataInfo = Object.values(stations);

  return (
    <div className={styles.dataTableView}>
      {!feedback && (
        <h4 className={styles.message}>
          Identify the bottleneck and selectively add capacity. Consider
          throughput and click on the square to assign resources.
        </h4>
      )}
      <div className={styles.tableContainer}>
        <h4 className={styles.title}>Stations</h4>
        <div
          className={classNames(styles.list, {
            [styles.listFeedback]: feedback
          })}
        >
          {dataInfo.map((info, index) => {
            return (
              <Station
                key={index}
                info={info}
                flowRate={flowRate}
                feedback={feedback}
                isCorrect={
                  feedback === false ||
                  stations[`station${index + 1}`].machinesAssigned ===
                    stations[`station${index + 1}`].solution
                }
              />
            );
          })}
        </div>
        <div className={styles.demandContainer}>
          <h3 className={styles.tons}>
            {demand}
            <span> {" lbs"} </span>
          </h3>
          <h4 className={styles.demand}>demand</h4>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
