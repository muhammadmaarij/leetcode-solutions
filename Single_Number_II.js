/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let isNotReapeted = nums.filter((num , index) => nums.indexOf(num) == nums.lastIndexOf(num))
        return isNotReapeted;
};
