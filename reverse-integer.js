/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  const isNegative = x < 0;
  x = Math.abs(x);

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
};
