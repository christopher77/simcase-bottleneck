function getRoundCapacities(state) {
  let currentCapacities = {};
  Object.values(state.rounds[`round${state.rounds.currentRound}`].stations).map(
    station => {
      currentCapacities[station.stationName] =
        station.capacity * station.machinesAssigned;
      return currentCapacities;
    }
  );
  return currentCapacities;
}

function getRoundMachinesAssigned(state) {
  let currentAssigments = {};
  Object.values(state.rounds[`round${state.rounds.currentRound}`].stations).map(
    station => {
      currentAssigments[station.stationName] = station.machinesAssigned;
      return currentAssigments;
    }
  );
  return currentAssigments;
}

function getMachineCapacities(state) {
  let currentCapacities = {};
  Object.values(state.rounds[`round${state.rounds.currentRound}`].stations).map(
    station => {
      currentCapacities[station.stationName] = station.capacity;
      return currentCapacities;
    }
  );
  return currentCapacities;
}

function getExpectedNumberOfMachines(state) {
  let correctNumberOfMachines = {};
  Object.values(state.rounds[`round${state.rounds.currentRound}`].stations).map(
    station => {
      correctNumberOfMachines[station.stationName] = station.solution;
      return correctNumberOfMachines;
    }
  );
  return correctNumberOfMachines;
}

export {
  getRoundCapacities,
  getRoundMachinesAssigned,
  getMachineCapacities,
  getExpectedNumberOfMachines
};
