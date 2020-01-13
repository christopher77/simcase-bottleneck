import { connect } from "react-redux";
import YearEnd from "./YearEnd/YearEnd";
import { setTotalScore, getSuccessRate } from "../../redux/actions/UserActions";

const mapStateToProps = state => ({
  totalScore: state.user.totalScore,
  success: state.user.success
});

const mapDispatchToProps = {
  setTotalScore: setTotalScore,
  getSuccessRate: getSuccessRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YearEnd);
