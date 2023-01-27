function progressDays(miles) {
  //declare a variable to store the number of progress days
  let progressDays = 0;

  //iterate through the miles array starting from the second element
  //(i = 1) use this loop to compare the current element with the previous
  for (let i = 1; i < miles.length; i++) {
    // check if the current element is greater than the previous element
    if (miles[i] > miles[i - 1]) {
      // if the current element is greater than the previous element,
      // increment the progressDays variable by 1.
      progressDays++;
    }
  }
  // return the total number of progress days.
  return progressDays;
}

console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays([9, 9]));
console.log(progressDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(progressDays([1, 2, 3, 2, 1]));
