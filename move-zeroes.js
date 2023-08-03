/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let end = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let j = 0; j < end - 1; j++) {
        if (nums[j] == 0) {
          let temp = nums[j + 1];

          nums[j + 1] = nums[j];
          nums[j] = temp;
        }
      }
      end--;
    }
  }
  return nums;
};
