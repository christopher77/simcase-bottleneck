import flowRate from "./FlowRate";

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
function getTotalCapacities(machineAssignedList, machineCapacityList) {
  let totalCapacities = {};
  Object.keys(machineAssignedList).map(station => {
    totalCapacities[station] =
      machineAssignedList[station] * machineCapacityList[station];

    return totalCapacities;
  });
  return totalCapacities;
}

function expectedCapacities(
  currentDemand,
  currentCapacitiesList,
  machinesAssignedList = {
    Distribution: 1,
    "Melt & Cut": 1,
    Recycling: 1,
    Sorting: 1,
    Washing: 1
  },
  machinesAvailable = 2
) {
  const machinesAssignedperStation = { ...machinesAssignedList };
  let mAvailable = machinesAvailable;
  while (mAvailable > 0) {
    let currentTotalCapacities = getTotalCapacities(
      machinesAssignedperStation,
      currentCapacitiesList
    );
    let currentFlowRate = flowRate(currentDemand, currentTotalCapacities);
    let stationToChange = getKeyByValue(
      currentTotalCapacities,
      currentFlowRate
    );

    //assign one machine to station
    machinesAssignedperStation[stationToChange]++;

    mAvailable--;
  }

  return machinesAssignedperStation;
}
export default expectedCapacities;
