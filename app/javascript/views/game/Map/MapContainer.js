import { connect } from "react-redux";
import Map from "./Map";
import { changeRound } from "../../../redux/actions/RoundsActions";
import {
  setFeedbackTrue,
  setFeedbackFalse
} from "../../../redux/actions/FeedbackActions";
import {
  addMachinesToStation,
  decrementMachinesAvailable
} from "../../../redux/actions/RoundsActions";
import { handleSuccessRate } from "../../../redux/actions/UserActions";
import { getExpectedNumberOfMachines } from "../../../redux/selectors/index";

const mapStateToProps = (state, ownProps) => {
  const roundNumber = `round${ownProps.round}`;
  let expectedNumberOfMachines = getExpectedNumberOfMachines(state);

  return {
    machinesAvailable: state.rounds[roundNumber].machinesAvailable,
    stations: state.rounds[roundNumber].stations,
    round: ownProps.round,
    feedback: state.feedback.feedback,
    currentRound: state.rounds.currentRound,
    expectedMachines: expectedNumberOfMachines
  };
};

const mapDispatchToProps = {
  addMachinesToStation: addMachinesToStation,
  decrementMachinesAvailable: decrementMachinesAvailable,
  changeRound: changeRound,
  setFeedbackTrue: setFeedbackTrue,
  setFeedbackFalse: setFeedbackFalse,
  handleSuccessRate: handleSuccessRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
