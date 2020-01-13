function totalProduction(capacities = {}) {
  const machinesCapacities = Object.values(capacities);
  const minCapacity = Math.min(...machinesCapacities);
  return minCapacity;
}
function flowRate(currentDemand = 0, capacitiesInRound = {}) {
  const totalProductionValue = totalProduction(capacitiesInRound);
  const flowRateValue = Math.min(currentDemand, totalProductionValue);
  return flowRateValue;
}

export default flowRate;
