function fundraisingMoney(input){
    const juniorsCount = Number(input[0]);
    const seniorsCount = Number(input[1]);
    const typeRoad = input[2];

    let raisedMoney = 0;

    switch (typeRoad) {
        case "trail":
            raisedMoney += (juniorsCount * 5.50);
            raisedMoney += (seniorsCount * 7);
            break;
        case "cross-country":
            if((juniorsCount + seniorsCount) >=50){
                raisedMoney += (juniorsCount * (8 * 0.75));
                raisedMoney += (seniorsCount * (9.5 * 0.75));
            } else{
                raisedMoney += (juniorsCount * 8);
                raisedMoney += (seniorsCount * 9.5);
            }
            break;
        case "downhill":
            raisedMoney += (juniorsCount * 12.25);
            raisedMoney += (seniorsCount * 13.75);
            break;
        case "road":
            raisedMoney += (juniorsCount * 20);
            raisedMoney += (seniorsCount * 21.50);
            break;
    }
    raisedMoney *= 0.95;

    console.log(raisedMoney.toFixed(2));
}

fundraisingMoney(["21","26","cross-country"]);