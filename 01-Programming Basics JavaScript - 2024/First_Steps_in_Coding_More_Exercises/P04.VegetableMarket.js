function sell(input){
    const EURO_EXCHANGE_RATE = 1.94;

    const pricePerVegetableKg = Number(input[0]);
    const pricePerFruitsKg = Number(input[1]);
    const vegetablesKg = Number(input[2]);
    const fruitsKg = Number(input[3]);

    let vegetableProfit = pricePerVegetableKg * vegetablesKg;
    let fruitsProfit = pricePerFruitsKg * fruitsKg;

    let profitInEuro = (vegetableProfit + fruitsProfit) / EURO_EXCHANGE_RATE;

    console.log(profitInEuro.toFixed(2));
}

sell(["1.5","2.5","10","10"]);