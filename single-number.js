/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let arr = nums.sort(); 
  console.log(arr);
  for (let i = 0; i <= nums.length - 1; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

  return arr[arr.length - 1];
};
