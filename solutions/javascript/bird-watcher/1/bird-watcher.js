// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirdsCount = 0
  for(let i = 0; i < birdsPerDay.length; i++) {
    totalBirdsCount = totalBirdsCount + birdsPerDay[i];
  }
  return totalBirdsCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // const startOfGivenWeek = (birdsPerDay.length - (birdsPerDay.length / week));
  const startOfGivenWeek = 7 * (week - 1);
  let totalBirdsInGivenWeek = 0;
  for (let i = startOfGivenWeek; i < (startOfGivenWeek + 7); i++){
    totalBirdsInGivenWeek += birdsPerDay[i];
  }
  return totalBirdsInGivenWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i<birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
}
