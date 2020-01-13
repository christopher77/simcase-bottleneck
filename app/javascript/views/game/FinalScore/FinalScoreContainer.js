import { connect } from "react-redux";
import FinalScore from "./FinalScore";
import { addLastGame } from "../../../redux/actions/UserActions";
import { resetScores } from "../../../redux/actions/UserActions";
import { reset } from "../../../redux/actions/RoundsActions";

const mapStateToProps = state => ({
  totalScore: state.user.totalScore,
  success: state.user.success,
  successRate: state.user.successRate
});
const mapDispatchToProps = {
  addLastGame: addLastGame,
  reset: reset,
  resetScores: resetScores
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalScore);

// {
//   "totalScore": 0,
//   "success": 0,
//   "successRate": 0,
// }
