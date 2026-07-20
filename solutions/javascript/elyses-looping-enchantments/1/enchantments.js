// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let numberOfCardsOfGivenType = 0; 
  stack.forEach(item => {
    if (item === card)
      numberOfCardsOfGivenType += 1 
  })

  return numberOfCardsOfGivenType
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let numberOfCardsOfGivenType = 0;

    for (const item of stack) {
    if (type) {
      if ( (item % 2) === 0 ) {
          numberOfCardsOfGivenType += 1
      }
    } else {
     if ( (item % 2) !== 0 ) {
          numberOfCardsOfGivenType += 1
      }
    }
  }

  return numberOfCardsOfGivenType
}
