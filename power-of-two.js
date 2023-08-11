/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  for (let i = 0; i <= Math.ceil(Math.pow(n,1/2)); i++) {
    if (2 ** i == n) {
      return true;
    }
  }
  return false;
};
