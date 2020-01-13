import { connect } from "react-redux";
import StationBox from "./StationBox";
import {
  addMachinesToStation,
  decrementMachinesAvailable
} from "../../redux/actions/RoundsActions";

const mapStateToProps = (state, ownProps) => {
  return {
    station: ownProps.station,
    numStation: ownProps.numStation,
    machinesAvailable: ownProps.machinesAvailable,
    round: ownProps.round,
    isFeedback: ownProps.isFeedback,
    expectedMachines: ownProps.expectedMachines
  };
};

const mapDispatchToProps = {
  addMachinesToStation: addMachinesToStation,
  decrementMachinesAvailable: decrementMachinesAvailable
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationBox);
