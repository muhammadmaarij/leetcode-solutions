/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  let arr = nums.sort((a, b) => a - b)
  let check = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i+1 && i < arr.length - 1) {
      check = true;
    } else if (arr[i] == arr[i - 1] && i >= arr.length - 1 && arr.length>=2) {
      return true;
    } else {
      return false
    }
  }
  return check;
};

