import { connect } from "react-redux";
import DataTable from "./DataTable";
import flowRate from "../../../components/utils/Bottleneck/FlowRate";
import { getRoundCapacities } from "../../../redux/selectors/index";

const mapStateToProps = (state, ownProps) => {
  const roundNumber = `round${ownProps.round}`;
  const demand = state.rounds.data.Demand;
  const currentFlowRate = flowRate(demand, getRoundCapacities(state));

  return {
    stations: state.rounds[roundNumber].stations,
    demand: state.rounds[roundNumber].demand,
    feedback: state.feedback.feedback,
    flowRate: currentFlowRate
  };
};

export default connect(
  mapStateToProps,
  null
)(DataTable);
