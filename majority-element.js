/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let arr = nums.sort();
    let count = 0;
    if(nums.length<2){
        return arr[0]
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            count++;
            if(count>=Math.floor(nums.length/2)){
                return arr[i]
            }
        }
        else{
            count = 0;
        }
    }
};
