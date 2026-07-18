//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getOrdinalSuffix = (number) => {

    const remainder10 = number % 10;
    const remainder100 = number % 100;

    if (remainder100 >= 11 && remainder100 <= 13) {
      return 'th'
    }

    switch (remainder10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
    
}

export const format = (name, number) => {

  const ordinalNumeral = `${number}${getOrdinalSuffix(number)}`;
  
  return `${name}, you are the ${ordinalNumeral} customer we serve today. Thank you!`;
};
