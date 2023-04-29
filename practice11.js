// Write a JavaScript function that takes an array of numbers as input and returns a new array with the
//  numbers sorted in descending order.

const arr = [40, 100, 1, 5, 25, 10];
function sortDescending(arr) 
{
  return arr.sort(function(a, b) 
  {
    return b-a;
  });
}
let outputarr = sortDescending(arr);
console.log(outputarr);


// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Arrays</h2>

// <p>The Array.sort() method sorts the elements of an array.</p>

// <p id="demo"></p>

// <script>
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// document.getElementById("demo").innerHTML = points;
// </script>

// </body>
// </html>





//only for explanation
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
