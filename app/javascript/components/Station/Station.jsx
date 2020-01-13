import React from "react";
import Chevron from "../../components/ui/chevron";
import styles from "./Station.module.css";
import classNames from "classnames";
import Utilization from "../../components/utils/Bottleneck/Utilization";

export default function Station({
  index,
  info,
  feedback,
  isCorrect,
  flowRate
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isBotteneck =
    flowRate === 0
      ? false
      : Utilization(info.capacity * info.machinesAssigned, flowRate).bottleneck;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      key={index}
      className={classNames(styles.ContainerItem, {
        [styles.wrongAnswerBorder]: feedback && !isCorrect
      })}
    >
      <button
        className={classNames(styles.buttonContainer, {
          [styles.gameCapacityHeight]: !feedback,
          [styles.changeCursor]: feedback
        })}
        {...(feedback && { onClick: handleClick })}
      >
        <span
          className={classNames({
            [styles.buttonGrid]: !feedback,
            [styles.feedbackCapacityGrid]: feedback
          })}
        >
          <div
            className={classNames(styles.firstColumn, {
              [styles.wrongAnswerColor]: feedback && !isCorrect
            })}
          >
            <h1>{info.stationName[0].toUpperCase()}</h1>
          </div>

          <div
            className={classNames(styles.secondColumn, {
              [styles.secondColumnFeedback]: feedback
            })}
          >
            {feedback && !isCorrect && (
              <span className={styles.feedbackTitle}>Your answer</span>
            )}
            <div className={styles.machineSection}>
              <h2>{info.machinesAssigned}</h2>
              <p>{info.machinesAssigned === 1 ? "Machine" : "Machines"}</p>
            </div>
            <div className={styles.capacitySection}>
              <span>
                <h2>{info.capacity * info.machinesAssigned}</h2>
                {" lb/h"}
              </span>
              <p>Capacity</p>
            </div>
          </div>
          {feedback && (
            <div
              className={classNames(styles.thirdColumn, {
                [styles.rotateChevron]: isOpen
              })}
            >
              <Chevron width={10} fill={"#777"}></Chevron>
            </div>
          )}
        </span>
      </button>
      {feedback && (
        <section
          className={classNames(styles.containerPanel, {
            [styles.containerPanelOpen]: isOpen
          })}
        >
          <h3>{isBotteneck ? "Bottleneck! " : "No Bottleneck"}</h3>
          {isCorrect ? (
            <p>Your answer is correct</p>
          ) : (
            <>
              <span className={styles.correctAnswerTitle}>Correct answer</span>
              <div
                className={classNames(
                  styles.machineSection,
                  styles.panelAnswersFormat
                )}
              >
                <h2>{info.solution}</h2>
                <p>{info.solution === 1 ? "Machine" : "Machines"}</p>
              </div>
              <div
                className={classNames(
                  styles.capacitySection,
                  styles.panelAnswersFormat
                )}
              >
                <span>
                  <h2>{info.capacity * info.solution}</h2>
                  {" lb/h"}
                </span>
                <p>Capacity</p>
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}
