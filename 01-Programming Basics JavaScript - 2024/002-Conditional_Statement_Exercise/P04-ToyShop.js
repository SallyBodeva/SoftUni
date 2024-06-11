function Workikg(input) {
    const PUZZLE_PRICE = 2.60;
    const DOLL_PRICE = 3;
    const TEDDY_BEAR_PRICE = 4.1;
    const MINION_PRICE = 8.20;
    const CAR_PRICE = 2;
    
    
    const tripPrice = Number(input[0]);
    const puzzelsCount = Number(input[1]);
    const dollCount = Number(input[2]);
    const teddyBearsCount = Number(input[3]);
    const minionsCount  = Number(input[4]);
    const carsCount = Number(input[5]);

    let totalToysCount = puzzelsCount + teddyBearsCount + dollCount + minionsCount + carsCount;
    let sum = puzzelsCount * PUZZLE_PRICE + dollCount * DOLL_PRICE + teddyBearsCount * TEDDY_BEAR_PRICE + minionsCount * MINION_PRICE + carsCount * CAR_PRICE;
    if(totalToysCount >= 50){
        sum *= 0.75;
    }
    sum *= 0.90;

    if(sum >= tripPrice){
        console.log(`Yes! ${(sum - tripPrice).toFixed(2)} lv left.`);
    } else{
        console.log(`Not enough money! ${(tripPrice - sum).toFixed(2)} lv needed.`);
    }
}

Workikg(["320","8","2","5","5","1"]);    
    