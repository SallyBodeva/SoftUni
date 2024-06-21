function holidayPlan(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let country = undefined;
    let place = undefined;
    let holidayPrice = 0;

    place = "Hotel"

    if(budget <= 100){
        country = "Bulgaria";
        if(season === "summer"){
            place = "Camp";
            holidayPrice = 0.3 * budget;
        } else{
            holidayPrice = 0.7 * budget;
        }
    } else if(budget <= 1000){
        country = "Balkans"
        if(season === "summer"){
            place = "Camp";
            holidayPrice = 0.4 * budget;
        } else{
            holidayPrice = 0.8 * budget;
        }
    } else{
    country = "Europe";
    holidayPrice = 0.9 * budget;
    }

     console.log(`Somewhere in ${country} \n${place} - ${holidayPrice.toFixed(2)}`);
}

holidayPlan(["75", "winter"]);