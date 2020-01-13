import { connect } from "react-redux";
import Leaderboard from "./Leaderboard";
import { reset } from "../../redux/actions/RoundsActions";
import { resetScores } from "../../redux/actions/UserActions";

const mapStateToProps = (state, ownProps) => ({
  totalScore: state.user.totalScore,
  lastGameComplete: state.user.lastGameComplete,
  id: ownProps.id,
  successRate: state.user.successRate
});

const mapDispatchToProps = {
  reset: reset,
  resetScores: resetScores
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
