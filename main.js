'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce((sum, num) => sum + num, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(element => element.hasOwnProperty(prop));
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(nameArr => {
      return {
        first: nameArr[0],
        last: nameArr[1]
      }
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every(element => element.hasOwnProperty(prop));
  },

  stringMatch: (arr, str) => {
    return arr.filter(element => element.includes(str));
  }

};
