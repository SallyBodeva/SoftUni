function sumOfDigits(number){
    let numberToString = number + '';
    let sum = 0;

    for(let i = 0; i < numberToString.length; i++){
        sum += Number(numberToString[i]);
    }

    console.log(sum);
}

sumOfDigits(123);