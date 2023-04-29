// Ex No: 13 :
//  Date Handling - calendar for the month and year by combo box

// b) Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, 
// mm/dd/yyyy or dd-mm-yyyy, 
// dd/mm/yyyy




// Get the current date
const currentDate = new Date();

// Get the day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // January is 0, so we need to add 1 to get the current month
const year = currentDate.getFullYear();

// Format the date in different formats
const formatDate1 = `${month}-${day}-${year}`; // mm-dd-yyyy
const formatDate2 = `${month}/${day}/${year}`; // mm/dd/yyyy
const formatDate3 = `${day}-${month}-${year}`; // dd-mm-yyyy
const formatDate4 = `${day}/${month}/${year}`; // dd/mm/yyyy

// Output the formatted dates
console.log(`mm-dd-yyyy: ${formatDate1}`);
console.log(`mm/dd/yyyy: ${formatDate2}`);
console.log(`dd-mm-yyyy: ${formatDate3}`);
console.log(`dd/mm/yyyy: ${formatDate4}`);
