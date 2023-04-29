// g) Write a JavaScript program to calculate days remains in your birthday


function daysUntilBirthday(birthday) {
    // Create a new Date object for today's date
    var today = new Date();
  
    // Create a new Date object for the next occurrence of the birthday
    var next_birthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  
    // If the next birthday has already passed this year, add a year
    if (next_birthday < today) {
      next_birthday.setFullYear(next_birthday.getFullYear() + 1);
    }
  
    // Calculate the difference between the two dates in milliseconds
    var time_diff = next_birthday.getTime() - today.getTime();
  
    // Convert the difference to days and return the result
    return Math.ceil(time_diff / (1000 * 3600 * 24));
  }
  
