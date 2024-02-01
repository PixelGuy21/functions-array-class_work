function hasNegativeNumber(arr){
    for (let i = 0; i < arr.lenght; i++){
        if (arr[i] < 0){
            console.log("ДА");
        return;
        }      
    }
    console.log("НЕТ");
}

let number1 = [1, 2, -3, 4, 5];
hasNegativeNumber(number1); //выведет да
let number2 = [1, 2, 3, 4 , 5];
hasNegativeNumber(number2); //выведет нет

