/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    let bool =false
    for(let i=0; i<nums.length; i++){
        if(nums[i]==nums[i+1]){
            bool = true;
        }
        else{
            k++;
            bool = false
        }
        if(nums[i+2]==nums[i+1] && bool){
            nums.splice(i, 1);
            i--;
        }
        else{
            k++;
        }
    }
    return k;
};
