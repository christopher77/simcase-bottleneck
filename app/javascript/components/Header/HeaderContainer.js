import { connect } from "react-redux";
import Header from "./Header";
import { reset } from "../../redux/actions/RoundsActions";
import { resetScores } from "../../redux/actions/UserActions";

const mapStateToProps = state => {
  return {
    feedback: state.feedback.feedback
  };
};

const mapDispatchToProps = {
  reset: reset,
  resetScores: resetScores
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
