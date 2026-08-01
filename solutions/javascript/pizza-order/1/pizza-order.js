/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {

  let totalPrice = 0;

  switch(pizza) {
    case 'Margherita': 
        totalPrice = 7;
        break;
    case 'Caprese':
        totalPrice = 9;
        break;
    case 'Formaggio':
        totalPrice = 10;
        break;
    default:
      totalPrice = 7;
  }

  const addCostOfExtrasToTotalPrice = (options) => {
    // base case
    if (options.length === 0 || options === undefined) {
      return
    }

    // recursive case
    if(options[options.length - 1] === 'ExtraSauce') {
      totalPrice += 1;
    } else {
      totalPrice += 2;
    }
    options.pop()
    addCostOfExtrasToTotalPrice(options)
  }

  addCostOfExtrasToTotalPrice(extras)

  return totalPrice;
  
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((totalPrice, pizzaOrder) => totalPrice += pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras), 0)
}
