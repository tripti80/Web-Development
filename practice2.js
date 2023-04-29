// Write a JavaScript function that takes an array of numbers as an argument and returns the sum of all 
//   the even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(numbers) 
{
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
    {
      if (numbers[i] % 2 === 0) 
      {
        sum += numbers[i];
      }
    }
    return sum;
  }
const sumOfEvens = sumOfEvenNumbers(numbers);
console.log(sumOfEvens);

