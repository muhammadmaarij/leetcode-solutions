/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  for (let i = 0; i <= Math.ceil(Math.pow(n, 1 / 4)); i++) {
    if (4 ** i == n) {
      return true;
    }
  }
  return false;
};
