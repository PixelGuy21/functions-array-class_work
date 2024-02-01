function filterNumbers(arr) {
    return arr.filter(function(num) {
      return num % 3 === 0 || num % 5 === 0 || num % 7 === 0;
    });
  }
  
  var inputArray = [1, 3, 5, 7, 9, 10, 14, 15, 21, 25, 30];
  var filteredArray = filterNumbers(inputArray);
  console.log(filteredArray);
  