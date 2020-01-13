import React from "react";
import Loading from "../../components/ui/Loading/Loading";
import { navigate } from "@reach/router";

function Transition(props) {
  const {
    currentRound,
    nextDemand,
    capacities,
    machinesAssignation,
    flowRate,
    expectedMachines,
    rateForScore
  } = props;

  const changeCurrentGame = round => {
    if (round != 5) {
      props.changeRound(
        round,
        machinesAssignation,
        nextDemand,
        capacities,
        flowRate,
        expectedMachines
      );
    }
  };

  const hoursPerQuarter = 24 * 30 * 3;
  const listOfFlowRates = Object.values(rateForScore);
  const theMinimum = Math.min(...listOfFlowRates);
  const scoreOfRound = hoursPerQuarter * theMinimum;

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const updateCurrentScore = round =>
    props.updateScore(scoreOfRound, round - 1);

  React.useEffect(() => {
    async function redirectInTwoSecond(round) {
      await sleep(2000);
      const nextRound = parseInt(round) + 1;
      updateCurrentScore(round);
      navigate(`/quarter/${nextRound}/`);
      changeCurrentGame(nextRound);
    }
    redirectInTwoSecond(currentRound);
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
}

export default Transition;
