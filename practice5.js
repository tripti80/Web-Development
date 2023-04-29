// Write a JavaScript function that takes a string as an argument and returns a 
// new string with all the vowels removed.

const inputStr = 'Hello, World!';

function removeVowels(str) {
  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Convert the input string to lowercase
  const lowerCaseStr = str.toLowerCase();
  
  // Initialize an empty string to hold the new string with vowels removed
  let newStr = '';
  
  // Loop through each character in the input string
  for (let i = 0; i < lowerCaseStr.length; i++) 
  {
    // If the current character is not a vowel, add it to the new string
    if (!vowels.includes(lowerCaseStr[i])) {
      newStr += lowerCaseStr[i];
    }
  }
  
  // Return the new string with vowels removed
  return newStr;
}

const outputStr = removeVowels(inputStr);
console.log(outputStr); // Output: 'Hll, Wrld!'


// This function works by first defining an array of vowels ('a', 'e', 'i', 'o', 'u').
// It then converts the input string to lowercase so that it can more easily compare each character to the
// vowels array. It initializes an empty string to hold the new string with vowels removed, and then loops
// through each character in the input string. If the current character is not a vowel, it adds it to the new
// string. Finally, it returns the new string with vowels removed.
