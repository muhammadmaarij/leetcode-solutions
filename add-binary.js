/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (b.length > a.length) {
    [a, b] = [b, a];
  }

  const maxLength = a.length;
  let carry = 0;
  let result = "";

  for (let i = 1; i <= maxLength; i++) {
    const bit1 = a[a.length - i] === "1" ? 1 : 0;
    const bit2 = b[b.length - i] === "1" ? 1 : 0;

    const sum = bit1 + bit2 + carry;
    carry = Math.floor(sum / 2); 
    const currentBit = sum % 2; 

    result = currentBit.toString() + result; 
  }

  if (carry) {
    result = carry.toString() + result;
  }

  return result;
};
