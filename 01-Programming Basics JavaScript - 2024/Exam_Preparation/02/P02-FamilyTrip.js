function holiday(input){
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let additionalTexesInPercetage = Number(input[3]);

    if(nightsCount > 7){
        pricePerNight *= 0.95;
    }

    let total = pricePerNight * nightsCount;
    total += budget * (additionalTexesInPercetage / 100);

    if(budget >= total){
        console.log(`Ivanovi will be left with ${(budget-total).toFixed(2)} leva after vacation.`);
    } else{
        console.log(`${(total - budget).toFixed(2)} leva needed.`);
    }
}

holiday(["800.50",
    "8",
    "100",
    "2"]);    