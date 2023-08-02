/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArray = s.split("")
    let tArray = t.split("")
    sArray = sArray.sort()
    tArray = tArray.sort()
    s = sArray.join("")
    t = tArray.join("")
    if(s ==t){
        return true
    }
    return false
};
