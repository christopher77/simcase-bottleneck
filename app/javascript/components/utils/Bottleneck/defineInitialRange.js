function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function defineInitialRange(data = []) {
  // {Demand: 193, Demand reduced: 35, Distribution: 99, Melt & Cut: 80, Recycling: 86, Sorting: 90, Washing: 85}
  let fixedRanges = {};
  data.map(machine => {
    fixedRanges[machine["attributes"]["name"]] = getRandomIntInclusive(
      machine["attributes"]["min"],
      machine["attributes"]["max"]
    );
  });
  return fixedRanges;
}

export default defineInitialRange;
