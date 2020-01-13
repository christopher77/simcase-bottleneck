import { connect } from "react-redux";
import PreGame from "./PreGame";
import fetchCapacities from "../../redux/services/fetchCapacities";

const mapStateToProps = state => {
  return {
    loading: state.rounds.loading,
    capacity: state.rounds.data
  };
};

const mapDispatchToProps = {
  fetchCapacities: fetchCapacities
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreGame);
