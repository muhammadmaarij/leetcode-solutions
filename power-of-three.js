/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
for (let i = 0; i <= Math.ceil(Math.pow(n,1/3)); i++) {
    if (3 ** i == n) {
      return true;
    }
  }
  return false;
};
