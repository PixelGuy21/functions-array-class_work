function hasMultipleOfThree(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        console.log("Да");
        return;
      }
    }
    console.log("Нет");
  }
  
  let numbers1 = [1, 2, 3, 4, 5];
  hasMultipleOfThree(numbers1); // Выведет да
  let numbers2 = [1, 2, 4, 5, 7];
  hasMultipleOfThree(numbers2); // Выведет нет
  