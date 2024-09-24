function calculateSpices(statringYield) {
    let total = 0;
    let days = 0;
    while(statringYield >= 100){
        days++;
        total += statringYield - 26;
        statringYield -= 10;
    }
    if(total >= 26){
    total -= 26;
    }
    console.log(days);
    console.log(total);
}

calculateSpices(450);
