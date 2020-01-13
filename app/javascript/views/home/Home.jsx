import React from "react";
import styles from "./Home.module.css";
import whartonLogo from "../../assets/whartonLogo.svg";

import { Link } from "@reach/router";

function Home() {
  const focusOnButton = React.useRef(null);

  React.useEffect(() => {
    if (!!focusOnButton) {
      focusOnButton.current.focus();
    }
  }, []);

  return (
    <main className={styles.wrapper}>
      <img src={whartonLogo} alt="logo" />
      <h1 className={styles.title}>Process Bottlenecks</h1>
      <svg
        width="145"
        height="141"
        viewBox="0 0 145 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.753438 45.787L9.83016 52.8789L1.28724 69.2443C-2.9841 76.7907 4.3538 84.1419 9.0291 86.7009C13.6317 89.2199 20.7753 89.5194 27.4493 89.4287L39.4625 69.7899L48.5392 74.6996L32.7885 45.5145L0.753438 45.787ZM2.08805 85.8482L21.5761 121.852C25.4916 126.853 32.8776 128.035 40.5304 127.853H61.0862V93.7583L22.1101 93.4856C16.0592 93.8488 8.1392 92.576 2.08805 85.8482ZM124.697 19.497L114.094 23.9974L103.922 8.59186C99.3933 1.19757 89.4058 4.05137 84.9013 6.89996C80.467 9.70424 76.7415 15.807 73.5854 21.6883L84.9376 41.7163L76.243 47.2747L109.405 47.648L124.697 19.497ZM89.012 1.24259L48.0742 0.83223C41.8024 1.8323 37.1878 7.71902 33.6367 14.5008L23.671 32.4794L53.491 49.009L72.6256 15.0517C75.241 9.5827 80.194 3.27306 89.012 1.24259ZM90.7928 140.168L91.9968 128.712L110.403 127.285C119.065 126.908 121.411 116.789 121.104 111.468C120.801 106.23 117.269 100.013 113.656 94.4018L90.6352 94.6209L89.9886 84.3217L73.5849 113.145L90.7928 140.168ZM124.059 117.807L144.265 82.2009C146.431 76.2306 143.52 69.3405 139.31 62.9467L128.417 45.5143L99.5027 63.5817L119.926 96.7801C123.441 101.719 126.558 109.11 124.059 117.807Z"
          fill="white"
          fillOpacity="0.2"
        />
      </svg>
      <div className={styles.buttonsPosition}>
        <Link to="/pre-game" className={styles.link}>
          <button className={styles.start} ref={focusOnButton}>
            start game
          </button>
        </Link>
        <Link to="/leaderboard" className={styles.link}>
          <button className={styles.leaderboard}>leaderboard</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
