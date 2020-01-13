import React from "react";
import styles from "./SwitcherOnboarding.module.css";

import DataTableContainer from "../../views/game/DataTable/DataTableContainer";
import MapContainer from "../../views/game/Map/MapContainer";

function SwitcherOnboarding({ round }) {
  const [option, setOption] = React.useState(true);

  return (
    <div className={styles.switchGame}>
      <div className={styles.optionScreen}>
        {option && <MapContainer round={round} />}
        {!option && <DataTableContainer round={round} />}
      </div>
      <div className={styles.switch}>
        <input
          onChange={() => setOption(!option)}
          type="checkbox"
          id="switch"
          name="switch"
          checked={option}
        />
        <label htmlFor="switch">
          <div
            className={option ? styles.switchLabelSelected : styles.switchLabel}
          >
            PROCESS<br></br> MAP
          </div>
          <div
            className={option ? styles.switchLabel : styles.switchLabelSelected}
          >
            CAPACITY TABLE
          </div>
          <div className={styles.toggler} />
        </label>
      </div>
    </div>
  );
}

export default SwitcherOnboarding;
