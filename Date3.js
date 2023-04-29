// Ex No: 13 : Date Handling - calendar for the month and year by combo box

// c) Write a JavaScript function to get difference between two dates in 
// days.
// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28



function date_diff_indays(date1, date2) 
{
    // Convert both dates to milliseconds
  var date1_ms = new Date(date1).getTime();
  var date2_ms = new Date(date2).getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert the difference back to days
  var difference_days = Math.floor(difference_ms / (1000 * 60 * 60 * 24));
    // the number of milliseconds in a second, multiplied by the number of 
    // seconds in a minute, multiplied by the number of minutes in an hour, 
    // multiplied by the number of hours in a day
    
    return difference_days;
}
  
  // Test the function
  console.log(date_diff_indays('04/02/2014', '11/04/2014')); // Output: 215
  console.log(date_diff_indays('12/02/2014', '11/04/2014')); // Output: 28
  
