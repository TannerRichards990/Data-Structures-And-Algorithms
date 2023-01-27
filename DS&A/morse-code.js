const codes = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function uniqueWords(words) {
  let morseWords = new Set();
  for (let i = 0; i < words.length; i++) {
    let morseWord = "";
    for (let j = 0; j < words[i].length; j++) {
      let charCode = words[i].charCodeAt(j) - 97;
      morseWord += codes[charCode];
    }
    morseWords.add(morseWord);
  }
  return morseWords.size;
}

console.log(uniqueWords(["gin", "zen", "gig", "msg"]));
console.log(uniqueWords(["a"]));
