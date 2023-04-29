// WAJP that takes a string as input and returns a new string with all the vowels removed

let inputStr = "Hello World";

function removeVowels(inputStr) {
  let vowels = "aeiouAEIOU";
  let outputStr = "";
  for (let i = 0; i < inputStr.length; i++) 
  {
    let currentChar = inputStr[i];
    if (vowels.indexOf(currentChar) === -1) 
    {
      outputStr += currentChar;
    }
  }
  return outputStr;
}

let outputStr = removeVowels(inputStr);
console.log(outputStr);


// The function loops through each character in the input string and checks if it is a vowel.
// If it is not a vowel, it appends it to the outputStr. Finally, it returns the outputStr with all the
// vowels removed.

// Note: The indexOf method is used to check if the current character is a vowel. It returns -1 if the character
// is not found in the string.
