function power(number,power) {
    let result = 1;

    for(let i = 0; i < power;i++){
        result *= number;
    }

    console.log(result);
}

power(2,8);