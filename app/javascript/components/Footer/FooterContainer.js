import { connect } from "react-redux";
import Footer from "./Footer";

const mapStateToProps = state => {
  const roundNumber = `round${state.rounds.currentRound}`;
  return {
    machinesAvailable: state.rounds[roundNumber].machinesAvailable
  };
};

export default connect(
  mapStateToProps,
  null
)(Footer);
