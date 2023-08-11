var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str = "";

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        str += haystack[i + j];
      } else {
        break;
      }
    }

    if (str === needle) {
      return i;
    }
  }

  return -1;
};
