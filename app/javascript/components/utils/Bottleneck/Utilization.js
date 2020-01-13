function notZero(n) {
  n = +n; // Coerce to number.
  if (!n) {
    // Matches +0, -0, NaN
    throw new Error("Flow Rate is " + n);
  }
  return n;
}
export default function Utilization(CapacityOneMachine = 0, FlowRate = 1) {
  const BottleNeck = CapacityOneMachine / notZero(FlowRate) == 1 ? true : false;
  const utilization = {
    utilizationRate: CapacityOneMachine / FlowRate,
    bottleneck: BottleNeck
  };

  return utilization;
}
