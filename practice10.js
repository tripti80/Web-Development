// Write a JavaScript function that takes two arrays of numbers as input and returns a new array with only
//  the numbers that appear in both arrays


const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function intersection(arr1, arr2) {
  // Create an empty array to store the intersection
  const result = [];

  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) 
  {
    const num = arr1[i];

    // Check if the number is also in the second array
    if (arr2.includes(num)) 
    {
      // If it is, add it to the result array
      result.push(num);
    }
  }

  // Return the result array
  return result;
}

const result = intersection(arr1, arr2);

console.log(result); // Output: [3, 4]
