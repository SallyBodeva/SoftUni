function trasnport(input) {
    const km = Number(input[0]);
    const time = input[1];
    
    let byTaxi = Number.MAX_SAFE_INTEGER;
    let byTrain = Number.MAX_SAFE_INTEGER;
    let byBus = Number.MAX_SAFE_INTEGER;

    if(km >= 20){
        byBus = 0.09 * km;
    }
    if(km >= 100){
    byTrain = 0.06 * km;
    }

    if(time === "day"){
        byTaxi = 0.79 * km + 0.70;
    } else{
        byTaxi = 0.90 * km + 0.70;
    }

    console.log((Math.min(byBus,byTaxi,byTrain)).toFixed(2));
}

trasnport(["25","day"]);