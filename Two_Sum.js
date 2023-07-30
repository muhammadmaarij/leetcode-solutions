/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arr[0] = i;
        arr[1] = j;
        return arr;
      }
    }
  }
  return null;
};

twoSum([3,2,4], 6);
