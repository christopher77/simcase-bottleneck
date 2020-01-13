import {
  DECREMENT_MACHINES_AVAILABLE,
  ADD_MACHINES_STATION,
  CHANGE_ROUND,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  RESET
} from "../types/roundTypes";

export const decrementMachinesAvailable = round => {
  return {
    type: DECREMENT_MACHINES_AVAILABLE,
    payload: { round }
  };
};

export const addMachinesToStation = (station, round) => {
  return {
    type: ADD_MACHINES_STATION,
    payload: { station, round }
  };
};

export const changeRound = (
  currentRound,
  lastMachinesAssignation,
  nextDemand,
  capacities,
  flowRate,
  expectedMachinesAssigned
) => {
  return {
    type: CHANGE_ROUND,
    payload: {
      currentRound,
      lastMachinesAssignation,
      nextDemand,
      capacities,
      flowRate,
      expectedMachinesAssigned
    }
  };
};

export const fetchDataBegin = () => {
  return {
    type: FETCH_DATA_BEGIN
  };
};

export const fetchDataSuccess = (
  dataFetch,
  flowRate,
  expectedMachinesAssigned
) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { dataFetch, flowRate, expectedMachinesAssigned }
  };
};

export const fetchDataError = error => {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
};

export const reset = () => {
  return { type: RESET };
};
