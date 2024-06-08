function calculateFishStuff(input){
    const [mackarelPrice, sprinklePrice, bonitoQuantity, safridQuantity, clamQuantity] = input;
    
    const bonitoPrice = mackarelPrice * 1.60;
    const safridPrice = sprinklePrice * 1.80;
    const clamPrice = 7.50;

    const result = bonitoPrice * bonitoQuantity + safridPrice * safridQuantity + clamPrice * clamQuantity;
    
    console.log(result.toFixed(2));
}

calculateFishStuff(["6.90","4.20","1.5","2.5","1"]);