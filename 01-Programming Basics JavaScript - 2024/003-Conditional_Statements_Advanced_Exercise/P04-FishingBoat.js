function fishing(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishingMen = Number(input[2]);

    let rentMoney = 0;

    switch (season) {
        case "Spring":
            rentMoney = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentMoney = 4200;
            break;
        case "Winter":
            rentMoney = 2600;
            break;
    }
    if(fishingMen <= 6){
        rentMoney *= 0.9;
    } else if(fishingMen > 6 && fishingMen <= 11) {
        rentMoney *= 0.85;
    } else{
        rentMoney *= 0.75;
    }

    if(fishingMen % 2 === 0 && season !== "Autumn"){
        rentMoney *= 0.95;
    }

    if(budget >= rentMoney){
        console.log(`Yes! You have ${(budget - rentMoney).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${(rentMoney - budget).toFixed(2)} leva.`);
    }
}

fishing(["3000","Summer","11"]);    