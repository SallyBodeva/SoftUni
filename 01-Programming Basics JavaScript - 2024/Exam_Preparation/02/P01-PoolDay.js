function calculatePoolPrice(input){
    const people = Number(input[0]);
    const entryFee = Number(input[1]);
    const sunBedFee = Number(input[2]);
    const umbrellaPrice = Number(input[3]);

    let total = people * entryFee;
    total += (Math.ceil(0.75 * people)) * sunBedFee;
    total += (Math.ceil(people / 2) * umbrellaPrice);
    
    console.log(`${total.toFixed(2)} lv.`);
}

calculatePoolPrice(["21",
    "5.50",
    "4.40",
    "6.20"]);    