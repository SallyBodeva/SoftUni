function isPrime(number) {
    let isPrime = true;
    if(number != 3 && number != 2 && number != 5 && number != 7){
        if(number % 2 == 0){
            isPrime = false;
        } else if(number % 3 == 0){
            isPrime = false;
        }else if(number % 5 == 0){
            isPrime = false;
        }else if(number % 7 == 0){
            isPrime = false;
        }
    }

    console.log(isPrime);
}

isPrime(81);