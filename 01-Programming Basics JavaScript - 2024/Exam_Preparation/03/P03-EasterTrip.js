function calculate(input){
    let country = input.shift();
    let period = input.shift();
    let nightsCount = input.shift();

    let neededMoney = 0;

    switch(country){
        case "France":
            if(period === "21-23"){
                neededMoney += (nightsCount * 30 );
            } else if(period === "24-27"){
                neededMoney += (nightsCount * 35);
            } else{
                neededMoney += (nightsCount * 40)
            }
            break;
        case "Italy":
            if(period === "21-23"){
                neededMoney += (nightsCount * 28 );
            } else if(period === "24-27"){
                neededMoney += (nightsCount * 32);
            } else{
                neededMoney += (nightsCount * 39)
            }
            break;
        case "Germany":
            if(period === "21-23"){
                neededMoney += (nightsCount * 32 );
            } else if(period === "24-27"){
                neededMoney += (nightsCount * 37);
            } else{
                neededMoney += (nightsCount * 43)
            }
            break;
    }

    console.log(`Easter trip to ${country} : ${neededMoney.toFixed(2)} leva.`);
}

calculate(["Germany",
    "24-27",
    "5"]);    