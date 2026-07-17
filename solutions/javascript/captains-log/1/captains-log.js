// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(1000 + Math.random() * (8999))}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000.0 + Math.random() * 999.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planertryClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T','Y'];
  const randomIndex = (0 + Math.random() * (planertryClasses.length - 1)).toFixed(0);
  return planertryClasses[randomIndex]
}
