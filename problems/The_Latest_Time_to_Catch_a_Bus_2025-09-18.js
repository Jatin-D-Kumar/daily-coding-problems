
/**
 * The Latest Time to Catch a Bus
 * @param {number[]} bus        - sorted ascending bus arrival times
 * @param {number[]} passenger - sorted ascending passenger arrival times
 * @param {number} capacity     - maximum passengers per bus
 * @return {number} latest arrival time we can choose
 */
function latestTimeCatchTheBus(bus, passenger, capacity) {
  // quick lookup for occupied minutes
  const occupied = new Set(passenger);

  let pIdx = 0;               // index in passenger[]
  let