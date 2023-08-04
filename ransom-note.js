/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (ransomNote.length == 0) {
    return true;
  }
  return false;
};

var canConstruct = function(ransomNote, magazine) {
    magazineChars = magazine.split('');
    ransomChars = ransomNote.split('')
    for(let i = 0; i<ransomChars.length; i++){
      for(let j =0; j<magazineChars.length; j++){
        if(ransomChars[i] == magazineChars[j]){
          ransomChars.splice(i,1);
          magazineChars.splice(j,1);
          i--;
        }
      }
    }
    if(ransomChars.length == 0){
      return true;
    }
    return false
};
