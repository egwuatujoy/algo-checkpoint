// sentence length number

const senTence = prompt("Enter a sentence ending with a point: ");
let senLength = senTence.length;
console.log(`The length of the sentence is ${senLength}`);

// sentence words number

let numWords = 0;
for (let word of senTence) {
  if (word == " ") {
    numWords++;
  }
}
totalNums = numWords + 1;
console.log(`The number of words in the sentence is ${totalNums}`);

// sentence vowels number

let numVowels = 0;
for (let alpha of senTence) {
  if (
    alpha == "a" ||
    alpha == "e" ||
    alpha == "i" ||
    alpha == "o" ||
    alpha == "u"
  ) {
    numVowels++;
  }
}
console.log(`The number of vowels in the sentence is ${numVowels}`);

alert(
  `The length of the sentence is ${senLength}\n The number of words in the sentence is ${totalNums}\n The number of vowels in the sentence is ${numVowels}`
);
