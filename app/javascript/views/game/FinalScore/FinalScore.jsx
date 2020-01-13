import React from "react";
import Header from "../../../components/Header/HeaderContainer";
import { navigate } from "@reach/router";
import styles from "./FinalScore.module.css";
import replayIcon from "../../../assets/replay-arrow.svg";
import listIcon from "../../../assets/list.svg";
import CurrencyFormat from "react-currency-format";
import { submitScore } from "./api";

function FinalScore({
  totalScore,
  successRate,
  reset,
  resetScores,
  addLastGame = () => {}
}) {
  const [username, setUsername] = React.useState("");
  const addUserLastGame = lastgame => addLastGame(lastgame);
  const [isEnabled, setIsEnabled] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const dataToSend = {
      score: {
        score: totalScore,
        success_rate: successRate,
        user_attributes: { name: username }
      }
    };
    const lastgame = await submitScore(dataToSend);
    addUserLastGame(lastgame);
    navigate(`/leaderboard/${lastgame.id}`);
  }

  function handleChange(event) {
    event.preventDefault();
    const {
      target: { value }
    } = event;
    setUsername(value);
    if (value.length >= 2) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }

  function handleRedirectLeaderBoard() {
    reset();
    resetScores();
    navigate("/leaderboard");
  }

  function handlePlayAgain() {
    reset();
    resetScores();
    navigate("/pre-game");
  }

  return (
    <>
      <Header rightHeader={5} />
      <div className={styles.componentContainer}>
        <h1>Final Score</h1>
        <section className={styles.finalScoreSection}>
          <div>
            <div className={styles.scoreItem}>
              <CurrencyFormat
                value={totalScore}
                thousandSeparator={true}
                displayType={"text"}
              />
            </div>
            <div className={styles.titlesScore}>Pounds recycled</div>
          </div>
          <div>
            <div className={styles.scoreItem}>{successRate}</div>
            <div className={styles.titlesScore}>% of Max</div>
          </div>
        </section>

        <p>Save your score and see your position in the leaderboard</p>

        <section className={styles.userInformationSection}>
          <form onSubmit={handleSubmit}>
            <label className={styles.titleName} htmlFor="username">
              Enter your name:
            </label>
            <input
              type="text"
              autoComplete="off"
              name="username"
              id="username"
              aria-label="Enter your name"
              onChange={handleChange}
              value={username}
              required
              autoFocus={true}
            />
          </form>
        </section>
        <button
          className={styles.saveButton}
          onClick={handleSubmit}
          disabled={!isEnabled}
        >
          save my score
        </button>
      </div>
      <div className={styles.iconsContainer}>
        <button className={styles.replay} onClick={handlePlayAgain}>
          <img src={replayIcon} alt="replay-icon" />
        </button>
        <button className={styles.list} onClick={handleRedirectLeaderBoard}>
          <img src={listIcon} alt="list-icon" />
        </button>
      </div>
    </>
  );
}

export default FinalScore;
