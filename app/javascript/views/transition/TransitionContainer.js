import { connect } from "react-redux";
import { changeRound } from "../../redux/actions/RoundsActions";
import { updateScore } from "../../redux/actions/UserActions";
import Transition from "./Transition";
import {
  getRoundMachinesAssigned,
  getRoundCapacities,
  getMachineCapacities
} from "../../redux/selectors/index";
import flowRate from "../../components/utils/Bottleneck/FlowRate";
import expectedCapacities from "../../components/utils/Bottleneck/ExpectedCapacities";

const mapStateToProps = state => {
  let demand = state.rounds.data.Demand;
  let machineCapacities = getMachineCapacities(state);
  let machineAssignList = getRoundMachinesAssigned(state);

  let nextFlowRate = flowRate(demand, getRoundCapacities(state));
  const flowRateForScore = getRoundCapacities(state);

  switch (
    state.rounds.currentRound //collect data for the next round
  ) {
    case 1: //sent to round 2
      // Sorting reduced by 50% Capacity
      machineCapacities.Sorting = Math.ceil(machineCapacities.Sorting * 0.5);
      break;

    case 2: //sent to round 3
      // All capacities Stations  reduced by 50%
      Object.keys(machineCapacities).forEach(
        station =>
          (machineCapacities[station] = Math.ceil(
            machineCapacities[station] * 0.5
          ))
      );
      break;

    case 3: //sent to round 4
      demand = state.rounds.data.DemandReduced;
      break;
  }

  let expectedMachinesAssigned = expectedCapacities(
    state.rounds.data.Demand,
    machineCapacities,
    machineAssignList
  );

  return {
    currentRound: state.rounds.currentRound,
    machinesAssignation: machineAssignList,
    nextDemand: demand,
    capacities: machineCapacities,
    flowRate: nextFlowRate,
    expectedMachines: expectedMachinesAssigned,
    rateForScore: flowRateForScore
  };
};

const mapDispatchToProps = {
  changeRound: changeRound,
  updateScore: updateScore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transition);
