# Data-Structures-And-Algorithms

## Practicing for interview like questions, using DS&A questions.

-All exercises will be done in Javascript.

Exercise 1.) Convenience Store: Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

Exercise 2.) Jewels and Stones: You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Exercise 3.) Morse Code:International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to .-,
'b' maps to -...,
'c' maps to -.-., and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
(HINT: you can get the char code to get a relative numeric value for each letter you can lookup in the array)

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as -.-..--..., which is the concatenation of -.-., .-, and -.... We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have.

Exercise 4.) Progress Days: To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

For example, progressDays([3, 4, 1, 2]) should return 2 because there are two progress days, (3->4) and (1->2)

Exercise 5.) Pluralize: Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

Notes
This is an oversimplification of the English language so no edge cases will appear.
Only focus on whether or not to add an s to the ends of words.
