// Ex No: 13 :
//  Date Handling - calendar for the month and year by combo box

// a) Write a JavaScript program to display the current day and time in the 
// following format.
// Sample Output :
// Today is : Friday.
// Current time is : 4 PM : 50 : 22




const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];
let currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
let timePeriod = 'AM';

if (currentHour >= 12) 
{
  currentHour -= 12;
  timePeriod = 'PM';
}

if (currentHour === 0) 
{
  currentHour = 12;
}

console.log(`Today is: ${currentDay}`);
console.log(`Current time is: ${currentHour}${timePeriod} : ${currentMinute} : ${currentSecond}`);
