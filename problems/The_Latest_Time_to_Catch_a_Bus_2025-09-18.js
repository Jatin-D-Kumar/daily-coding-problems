
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
  let lastBoarded = -1;       // last passenger that actually boarded
  let remainingSeats = 0;     // seats left on the last processed bus
  let lastBusTime = 0;        // time of the last bus (for later use)

  for (let i = 0; i < bus.length; ++i) {
    const bTime = bus[i];
    let seats = capacity;

    // board earliest possible passengers
    while (seats > 0 && pIdx < passenger.length && passenger[pIdx] <= bTime) {
      lastBoarded = passenger[pIdx];
      ++pIdx;
      --seats;
    }

    // remember info of the final bus
    if (i === bus.length - 1) {
      remainingSeats = seats;
      lastBusTime = bTime;
    }
  }

  // -------------------------------------------------
  // decide a starting candidate
  let candidate;
  if (remainingSeats > 0) {
    // there is an empty seat on the last bus
    candidate = lastBusTime;
  } else {
    // bus is full → we must sit before the last boarded passenger
    candidate = lastBoarded - 1;
  }

  // -------------------------------------------------
  // move backwards while the minute is already taken
  while (occupied.has(candidate)) {
    --candidate;
  }

  return candidate;
}

/* -------------------------------------------------
   Example usage (feel free to delete when cop