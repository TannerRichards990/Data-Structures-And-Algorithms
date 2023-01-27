function pluralize(words) {
  //create an empty object to store the count of each word
  let wordCount = {};
  //iterate through the words array
  for (let i = 0; i < words.length; i++) {
    //check if the word has not been seen before, add it to the wordCount
    //object with a value of 1
    if (!wordCount[words[i]]) {
      wordCount[words[i]] = 1;
    }
    //if the word has been seen before, increment the value by 1
    else {
      wordCount[words[i]]++;
    }
  }
  //create an empty array to store the pluralized words
  let pluralizedWords = [];
  //iterate through each key in the wordCount object
  for (let word in wordCount) {
    //if the count ofg the word is greater than 1
    if (wordCount[word] > 1) {
      //add the pluralized version of the word to the pluralizedWords
      //array.
      pluralizedWords.push(word + "s");
    }
  }
  //return the array of pluralized words
  return pluralizedWords;
}

console.log(pluralize(["cow", "pig", "cow", "cow"]));
console.log(pluralize(["table", "table", "table"]));
console.log(pluralize(["chair", "pencil", "arm"]));
