function profit(input){
    const targetProfit = Number(input.shift());
    let currentProfit = 0;
    while(true){
        let command = input.shift();
        if(command === "Party!"){
            if(currentProfit >= targetProfit){
                console.log(`Target acquired.`);
            }else{
                console.log(`We need ${(targetProfit-currentProfit).toFixed(2)} leva more.`);
            }
            break;
        }
        let coctailPrice = command.length;
        let bill = coctailPrice * Number(input.shift());
        if(bill % 2 == 1){
            bill *= 0.75;
        }
        currentProfit += bill;
        if(currentProfit >= targetProfit){
            console.log(`Target acquired.`);
            break;
        }
    }
    console.log(`Club income - ${currentProfit.toFixed(2)} leva.`);
}