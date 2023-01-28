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

//Function to find unique morse code words
function uniqueWords(words) {
  //Set to store unique morse code words
  let morseWords = new Set();
  //Loop through each word
  for (let i = 0; i < words.length; i++) {
    // Initialize a string to store the morse code of the current word
    let morseWord = "";
    //Loop through each character of the current word
    for (let j = 0; j < words[i].length; j++) {
      // Find the index of the character in the morse code array
      let charCode = words[i].charCodeAt(j) - 97;
      // Concatenate the morse code of the character to the morse code of the word
      morseWord += codes[charCode];
    }
    // add the morseWord to the set
    morseWords.add(morseWord);
  }
  // return the size of the set
  return morseWords.size;
}

//Outputs
console.log(uniqueWords(["gin", "zen", "gig", "msg"]));
console.log(uniqueWords(["a"]));
