const fs = require("fs");

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word == reversedWord;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.log("Usage: node program.js <input_file>");
    process.exit(1);
  }

  const inputFile = args[0];

  try {
    const word = fs.readFileSync(inputFile, "utf-8").trim();
    const word2 = word.toLowerCase();

    const result = isPalindrome(word2) ? "TRUE" : "FALSE";
    console.log(result);
  } catch (error) {
    console.error("Error reading the input file:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
