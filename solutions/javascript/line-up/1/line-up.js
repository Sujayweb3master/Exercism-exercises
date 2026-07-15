//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {

  let ordinalNumeral = `${number}th`;

  const isNumberEndingWithOneButNotEleven = (number % 10) === 1 && (number % 100 !== 11);
  if (isNumberEndingWithOneButNotEleven) {
    ordinalNumeral = `${number}st`
  }
  const isNumberEndingWithTwoButNotTwelve = (number % 10) === 2 && (number % 100 !== 12);
  if (isNumberEndingWithTwoButNotTwelve) {
    ordinalNumeral = `${number}nd`
  }
  const isNumberEndingWithThreeButNotThirteen = (number % 10) === 3 && (number % 100 !== 13);
  if (isNumberEndingWithThreeButNotThirteen) {
    ordinalNumeral = `${number}rd`
  }
  
  return `${name}, you are the ${ordinalNumeral} customer we serve today. Thank you!`;
};
