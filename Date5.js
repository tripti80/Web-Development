// e) Write a JavaScript program to find 1st January is being a Sunday between 
// year1 and year2.

function findSundays(year1, year2) 
{
    // Loop through all the years between year1 and year2
    for (var year = year1; year <= year2; year++) 
    {
      // Create a new Date object for January 1st of the current year
      var date = new Date(year, 0, 1);
      // Check if January 1st falls on a Sunday (0 is Sunday, 1 is Monday, and so on)
      if (date.getDay() === 0) 
      {
        console.log(year);
      }
    }
  }
  

