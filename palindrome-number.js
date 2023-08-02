/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();
    let bool = true;

        for(let i = 0; i<=y.length/2; i++){
            if(i == y.length-i){
                return bool;
            }
            if(y[i] == y[y.length-i-1]){
                bool = true;
            }
            else{
                return false
            }
        }
    return bool
};
