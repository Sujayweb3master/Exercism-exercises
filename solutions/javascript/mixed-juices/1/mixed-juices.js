// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy': 
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default: 
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let value = 0;
  let limesCount = 0;
  while (value <= wedgesNeeded && limesCount < limes.length) {
    if (wedgesNeeded === 0) 
    {
      // break;
      return 0;
    }
    let numberOfWedgesInSingleLime = 0
    const limeSize = limes[limesCount];

    switch(limeSize) {
      case 'small':
        numberOfWedgesInSingleLime = 6
        break;
      case 'medium':
        numberOfWedgesInSingleLime = 8
        break;
      case 'large':
        numberOfWedgesInSingleLime = 10
    }
      
    value += numberOfWedgesInSingleLime
    limesCount++;
  }
  return limesCount
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  let remainingTime = timeLeft;
  do {
    const timeToMixParticularJuice = timeToMixJuice(orders.shift())
    remainingTime = remainingTime - timeToMixParticularJuice;
    
    console.log('orders', orders)
    console.log('timeLeft', timeLeft)
    console.log('timeToMixParticularJuice', timeToMixParticularJuice)
    console.log('remainingTime', remainingTime)
  } while (remainingTime > 0)

  return orders
}
