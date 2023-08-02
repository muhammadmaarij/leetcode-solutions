/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let y = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let bool = true;

        for(let i = 0; i<=y.length/2; i++){
            if(i == y.length-i-1){
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
