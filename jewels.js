function countJewels(jewels, stones) {
  // Initialize a count variable to keep track of the number of jewels found.
  let count = 0;
  //Iterate through each character in the 'stones' string.
  for (let i = 0; i < stones.length; i++) {
    // Check if the current character is included in the 'jewels' string
    // using the 'includes' method.
    if (jewels.includes(stones[i])) {
      // If the character is present, increment the count variable.
      count++;
    }
  }
  //After iterating through the entire 'stones' string, return the count.
  return count;
}

console.log(countJewels("aA", "aAAbbbb"));
console.log(countJewels("z", "ZZ"));
