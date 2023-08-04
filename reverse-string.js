/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let count = 0;
    for(let i = s.length-1; i>=s.length/2; i-- ){
      temp = s[count]
      s[count] = s[i]
      s[i] = temp
      count+=1;
    }
  return s
};
