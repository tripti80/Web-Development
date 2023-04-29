// Ex No: 13 : Date Handling - calendar for the month and year by combo box
// d) 16. Write a JavaScript function to count the number of days passed 
// since beginning of the year. Go to the editor
// Test Data :
// console.log(days_passed(new Date(2015, 0, 15)));
// 15
// console.log(days_passed(new Date(2015, 11, 14)));
// 348


function days_passed(date) {
  // Create a new date object for the start of the year
  var start_of_year = new Date(date.getFullYear(), 0, 1);

  // Calculate the number of milliseconds between the two dates
  var milliseconds_passed = date.getTime() - start_of_year.getTime();

  // Convert the milliseconds to days and return the result
  return Math.floor(milliseconds_passed / (1000 * 60 * 60 * 24)) + 1;
}

console.log(days_passed(new Date(2015, 0, 15))); // Output: 15
console.log(days_passed(new Date(2015, 11, 14))); // Output: 348

  
