import React from "react";
import styles from "./Leaderboard.module.css";
import { navigate } from "@reach/router";
import home from "../../assets/Leaderboard/home.svg";
import play from "../../assets/Leaderboard/play.svg";
import Header from "../../components/Header/Header";
import CurrencyFormat from "react-currency-format";
import LazySquare from "../../components/ui/LazySquare/LazySquare";
import classNames from "classnames";

const LazyLeaderboardItem = React.lazy(() => import("./LeaderboardItem"));

function Leaderboard(props) {
  const [leaderboard, setLeaderboard] = React.useState([]);
  const { totalScore, id, reset, resetScores } = props;

  React.useEffect(() => {
    async function getLeaderboard() {
      const dataLeaderboard = await fetch(
        `${process.env.APP_URL}/api/leaderboard`
      ).then(response => response.json());
      setLeaderboard(dataLeaderboard);
    }
    getLeaderboard();
  }, [id]);

  const handlePlayAgain = () => {
    reset();
    resetScores();
    navigate("/pre-game");
  };

  const handleGoHome = () => {
    reset();
    resetScores();
    navigate("/");
  };

  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.wrapperNoScore]: !totalScore
        })}
      >
        <Header
          rightHeader={!!totalScore ? 7 : 9}
          reset={reset}
          resetScores={resetScores}
        />

        <header className={styles.topPart}>
          {!!totalScore && (
            <div className={styles.myscoreTotal}>
              <h4>Your Score</h4>
              <p className={styles.myscore}>
                <CurrencyFormat
                  thousandSeparator={true}
                  value={totalScore}
                  displayType={"text"}
                />
                lbs
              </p>
            </div>
          )}
          {!totalScore && <h3>Ranking</h3>}
        </header>

        <main className={styles.bottomPart}>
          <div className={styles.title}>
            <span>NAME</span>
            <span>TOTAL SCORE</span>
          </div>
          <React.Suspense fallback={<LazySquare />}>
            <div className={styles.leaderboardList}>
              {leaderboard.map((user, i) => {
                return (
                  <LazyLeaderboardItem
                    resalt={user.user.id == id}
                    key={i}
                    user={user}
                    index={i}
                    success_rate={user.success_rate}
                  />
                );
              })}
            </div>
          </React.Suspense>
        </main>
        <footer className={styles.iconsContainer}>
          <button className={styles.homebtn} onClick={handleGoHome}>
            <img src={home} alt="iconHome" />
          </button>
          <button className={styles.playbtn} onClick={handlePlayAgain}>
            <img src={play} alt="iconPlay" />
          </button>
        </footer>
      </div>
    </>
  );
}

export default Leaderboard;
