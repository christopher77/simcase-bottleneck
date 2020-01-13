import { initialStateOfRounds } from "../../views/game/initialStateOfRounds";
import {
  DECREMENT_MACHINES_AVAILABLE,
  ADD_MACHINES_STATION,
  CHANGE_ROUND,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  RESET
} from "../types/roundTypes";

export default function(state = initialStateOfRounds, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.dataFetch,
        round1: {
          ...state.round1,
          demand: action.payload.dataFetch.Demand,
          flowRate: action.payload.flowRate,
          stations: {
            station1: {
              ...state.round1.stations.station1,
              capacity: action.payload.dataFetch.Recycling,
              solution: action.payload.expectedMachinesAssigned.Recycling
            },
            station2: {
              ...state.round1.stations.station2,
              capacity: action.payload.dataFetch.Sorting,
              solution: action.payload.expectedMachinesAssigned.Sorting
            },
            station3: {
              ...state.round1.stations.station3,
              capacity: action.payload.dataFetch.Washing,
              solution: action.payload.expectedMachinesAssigned.Washing
            },
            station4: {
              ...state.round1.stations.station4,
              capacity: action.payload.dataFetch["Melt & Cut"],
              solution: action.payload.expectedMachinesAssigned["Melt & Cut"]
            },
            station5: {
              ...state.round1.stations.station5,
              capacity: action.payload.dataFetch.Distribution,
              solution: action.payload.expectedMachinesAssigned.Distribution
            }
          }
        }
      };

    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case DECREMENT_MACHINES_AVAILABLE:
      const currentRoundValueDec = state[`round${action.payload.round}`];
      const currentMachineAvailable = currentRoundValueDec.machinesAvailable;
      return {
        ...state,
        [`round${action.payload.round}`]: {
          ...currentRoundValueDec,
          machinesAvailable: currentMachineAvailable - 1
        }
      };
    case ADD_MACHINES_STATION:
      const currentRoundValue = state[`round${action.payload.round}`];
      const currentStationValue =
        currentRoundValue.stations[`station${action.payload.station}`]
          .machinesAssigned;
      const currentCapacity =
        currentRoundValue.stations[`station${action.payload.station}`].capacity;
      const futureStationValue = currentStationValue + 1;
      const newStations = {
        ...currentRoundValue.stations,
        [`station${action.payload.station}`]: {
          ...currentRoundValue.stations[`station${action.payload.station}`],
          machinesAssigned: futureStationValue,
          capacity: currentCapacity
        }
      };
      const newRound = { ...currentRoundValue, stations: newStations };
      return {
        ...state,
        [`round${action.payload.round}`]: newRound
      };
    case CHANGE_ROUND:
      const round = action.payload;
      return {
        ...state,
        currentRound: round.currentRound,
        [`round${round.currentRound}`]: {
          ...state[`round${round.currentRound}`],
          demand: round.nextDemand,
          flowRate: round.flowRate,
          stations: {
            station1: {
              ...state[`round${round.currentRound}`].stations.station1,
              machinesAssigned: round.lastMachinesAssignation.Recycling,
              capacity: round.capacities.Recycling,
              solution: round.expectedMachinesAssigned.Recycling
            },
            station2: {
              ...state[`round${round.currentRound}`].stations.station2,
              machinesAssigned: round.lastMachinesAssignation.Sorting,
              capacity: round.capacities.Sorting,
              solution: round.expectedMachinesAssigned.Sorting
            },
            station3: {
              ...state[`round${round.currentRound}`].stations.station3,
              machinesAssigned: round.lastMachinesAssignation.Washing,
              capacity: round.capacities.Washing,
              solution: round.expectedMachinesAssigned.Washing
            },
            station4: {
              ...state[`round${round.currentRound}`].stations.station4,
              machinesAssigned: round.lastMachinesAssignation["Melt & Cut"],
              capacity: round.capacities["Melt & Cut"],
              solution: round.expectedMachinesAssigned["Melt & Cut"]
            },
            station5: {
              ...state[`round${round.currentRound}`].stations.station5,
              machinesAssigned: round.lastMachinesAssignation.Distribution,
              capacity: round.capacities.Distribution,
              solution: round.expectedMachinesAssigned.Distribution
            }
          }
        }
      };
    case RESET:
      return initialStateOfRounds;

    default:
      return state;
  }
}
