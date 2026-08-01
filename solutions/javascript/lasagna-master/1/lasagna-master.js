/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime > 0) {
    return 'Not done, please wait.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else {
    return 'You forgot to set the timer.';
  }
}

export function preparationTime (layers, averagePreparationTime) {
  const DEFAULT_AVERAGE_PREPARATION_TIME = 2;
  const numberOfLayers = layers.length;
  
  if (averagePreparationTime) {
    return numberOfLayers * averagePreparationTime
  } else {
    return numberOfLayers * DEFAULT_AVERAGE_PREPARATION_TIME;
  }
}

export function quantities (layers) {

  const noodleAndSauceQuantities = {
    noodles: 0,
    sauce: 0
  }

  for (let i=0; i<layers.length; i++) {
    if (layers[i] === 'sauce') {
      noodleAndSauceQuantities['sauce'] += 0.2;
    } else if (layers[i] === 'noodles') {
      noodleAndSauceQuantities['noodles'] += 50;
    }
  }

  return noodleAndSauceQuantities
  
}

export function addSecretIngredient (listFromFriend, myList) {
  
  myList.push(listFromFriend[listFromFriend.length-1])
}

export function scaleRecipe (recipe, portion) {

  const finalRecipe = {}

  for (let key in recipe) {
    finalRecipe[key] = recipe[key] * (portion/2);
  }

  return finalRecipe;
}