import React from "react";
import map from "../../../assets/map.svg";
import map2 from "../../../assets/Map2.svg";
import styles from "./Map.module.css";
import { navigate } from "@reach/router";

import ToggleContent from "../../../components/ui/ToggleContent";
import Modal from "../../../components/ui/Modal";
import imageModal from "../../../assets/imageModal.svg";

import StationBoxContainer from "../../../components/StationBox/StationBoxContainer";
import RemainingCircle from "../../../components/RemainingMachines/RemainingCircle";

function Map(props) {
  const {
    stations,
    machinesAvailable,
    round,
    feedback,
    setFeedbackTrue,
    setFeedbackFalse,
    currentRound,
    expectedMachines
  } = props;

  const [matchesGame, _] = React.useState([true, true, true, true, true]);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const nextView = () => {
    navigate("/transition");
    setFeedbackFalse();
    addCorrectAnswers();
  };

  const theStation = Object.values(stations);
  const assignedPerStation = theStation.map(
    station => station.machinesAssigned
  );

  const theExpected = Object.values(expectedMachines);
  const theLength = (assignedPerStation.length, theExpected.length);

  const checkAnswers = () => {
    let hits = 0;
    for (let i = 0; i < theLength; i++) {
      if (assignedPerStation[i] === theExpected[i]) {
        hits++;
      }
    }
    return hits;
  };

  const hitsNumber = checkAnswers();
  const addCorrectAnswers = () => props.handleSuccessRate(hitsNumber);

  return (
    <div className={styles.mapGame}>
      <section className={styles.mapContainer}>
        <img src={currentRound > 1 ? map2 : map} />
        <div className={styles.stationsContainer}>
          {matchesGame.map((_, index) => {
            return (
              <StationBoxContainer
                station={stations[`station${index + 1}`]}
                numStation={index + 1}
                key={index}
                machinesAvailable={machinesAvailable}
                round={round}
                feedback={feedback}
                flagDirection={index > 1 ? "right" : "left"}
                expectedMachines={expectedMachines}
                buttonRef={buttonRef}
              />
            );
          })}
        </div>
        <h3 className={styles.title}>
          {feedback
            ? "These are your results in the current round"
            : "Tap to add machines to stations."}
        </h3>
      </section>
      <section className={styles.bottomLeft}>
        <ToggleContent
          setFeedbackTrue={setFeedbackTrue}
          addCorrectAnswers={addCorrectAnswers}
          toggle={show => (
            <button
              onClick={feedback ? nextView : show}
              className={styles.submit}
              alt={feedback ? "next" : "submit"}
              autoFocus={true}
              ref={buttonRef}
            >
              {feedback ? "next" : "submit"}
            </button>
          )}
          content={(handleFeedback, hide) => (
            <Modal>
              <>
                <h5 className={styles.messageModal}>
                  {!!machinesAvailable
                    ? "You need to invest in additional stations to continue."
                    : "Investments deployed. Let's review your plant's performance."}
                </h5>
                <img src={imageModal} alt="image-modal" />
                <button
                  className={styles.buttonConfirm}
                  onClick={machinesAvailable !== 0 ? hide : handleFeedback}
                  autoFocus={true}
                >
                  {!!machinesAvailable ? "RETURN" : "CONFIRM"}
                </button>
              </>
            </Modal>
          )}
        />
      </section>
      <section className={styles.bottomRight}>
        <RemainingCircle
          currentAvailable={machinesAvailable}
          totalMachines="2"
        />
      </section>
    </div>
  );
}

export default Map;
