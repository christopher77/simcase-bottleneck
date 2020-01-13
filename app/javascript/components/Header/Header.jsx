import React from "react";
import styles from "./Header.module.css";
import universityLogo from "../../assets/Onboarding/universityLogo.svg";
import { navigate } from "@reach/router";
import Modal from "../ui/Modal";
import alert from "../../assets/alert.svg";

const Header = props => {
  const { feedback, rightHeader, reset, resetScores } = props;
  const [showModal, setShowModal] = React.useState(false);

  function changeRightHeader(value) {
    switch (parseInt(value)) {
      case 1:
        return "First Quarter";
        break;
      case 2:
        return "Second Quarter";
        break;
      case 3:
        return "Third Quarter";
        break;
      case 4:
        return "Fourth Quarter";
        break;
      case 5:
        return "Score";
        break;
      case 6:
        return "Feedback";
        break;
      case 7:
        return "Leaderboard";
        break;
      case 8:
        return "Onboarding";
        break;
      case 9:
        return "Leaderboard";
        break;
    }
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goHome = () => {
    reset();
    resetScores();
    navigate("/");
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div
          className={styles.homebutton}
          onClick={parseInt(rightHeader) > 6 ? goHome : openModal}
        >
          <img src={universityLogo} className={styles.logo} />
        </div>
        <h3 className={rightHeader == 7 ? styles.titleWhite : styles.title}>
          {feedback ? changeRightHeader(6) : changeRightHeader(rightHeader)}
        </h3>
      </div>

      {showModal && (
        <Modal>
          <h5 className={styles.messageModal}>
            You will lose all points, Are you sure?{" "}
          </h5>
          <img src={alert} alt="alert-image"></img>
          <button className={styles.buttonConfirm} onClick={goHome}>
            Continue
          </button>
          <button className={styles.buttonCancel} onClick={closeModal}>
            Cancel
          </button>
        </Modal>
      )}
    </>
  );
};

export default Header;
