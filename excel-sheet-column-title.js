/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let string = '';
  while (columnNumber > 0) {
    columnNumber--;
    string = String.fromCharCode((columnNumber % 26) + 65) + string; 
    columnNumber = Math.floor(columnNumber / 26);
  }
  return string;

};
