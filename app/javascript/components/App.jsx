import React, { Suspense } from "react";
import { Router } from "@reach/router";
import styles from "./App.module.css";

import Error from "../views/home/Error/Error";
import IsometricMap from "../views/game/Map/IsometricMap";
import News from "../views/news/News/News";

import { Provider } from "react-redux";
import store from "../redux/store";
import TransitionContainer from "../views/transition/TransitionContainer";
import YearEndContainer from "../views/news/YearEndContainer";
import FinalScoreContainer from "../views/game/FinalScore/FinalScoreContainer";
import Home from "../views/home/Home";
import Spinner from "./ui/Spinner/Spinner";
import LeaderboardContainer from "../views/leaderboard/LeaderboardContainer";

const LazyPreGame = React.lazy(() =>
  import("../views/pre-game/PreGameContainer")
);
const LazyQuarters = React.lazy(() =>
  import("../views/quarters/Quarters/Quarters")
);

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <Suspense fallback={<Spinner />}>
          <Router className={styles.wrap}>
            <Home path="/" />
            <LazyPreGame path="/pre-game" />
            <LazyQuarters path="/quarter/:id" />
            <News path="/quarter/:id/news" />
            <IsometricMap path="/quarter/:id/game" />
            <TransitionContainer path="/transition" />
            <News path="announcement" />
            <YearEndContainer path="/year" />
            <FinalScoreContainer path="/finalscore" />
            <LeaderboardContainer path="/leaderboard" />
            <LeaderboardContainer path="/leaderboard/:id" />
            <Error default />
          </Router>
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
