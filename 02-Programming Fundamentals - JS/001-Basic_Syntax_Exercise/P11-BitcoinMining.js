function  mining(input) {
    const MONEY_PER_GRAM_OF_GOLD = 67.51;
    const BITCOIN_PRICE = 11949.16;

    let money = 0;
    let bitcoins = 0;
    let firstDay = 0;

    for(let i = 0; i < input.length; i++){
        if((i+1) % 3 === 0){
            input[i] = input[i] * 0.70;
        }
            money += (input[i]) * MONEY_PER_GRAM_OF_GOLD;
        if(money >= BITCOIN_PRICE){
            if(bitcoins == 0){
                firstDay = i+1;
            }
           let bought = Math.floor(money / BITCOIN_PRICE);
           money-= bought * BITCOIN_PRICE;
           bitcoins+=bought;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
    
}

mining([3124.15, 504.212, 2511.124]);