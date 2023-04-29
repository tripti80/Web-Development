// f) Write a JavaScript program to calculate days left until next Christmas.

    // Get the current date
const currentDate = new Date();

// Calculate the date of the next Christmas
const currentYear = currentDate.getFullYear();
const nextChristmas = new Date(currentYear, 11, 25);

// If Christmas has already passed this year, calculate the date of next year's Christmas
if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) 
{
  nextChristmas.setFullYear(currentYear + 1);
}

// Calculate the difference between the two dates in milliseconds
var time_diff = nextChristmas.getTime() - currentDate.getTime()

// Convert the difference to days and return the result
const daysLeft = Math.ceil((time_diff) / (1000 * 60 * 60 * 24));

// Output the result
console.log(`There are ${daysLeft} days left until next Christmas.`);
