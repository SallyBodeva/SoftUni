function feedingThePets(input) {
    const days = Number(input[0]);
    const leftFoodInKg = Number(input[1]);
    const foodForDogPerDay = Number(input[2]);
    const foodForCatPerDay = Number(input[3]);
    let foodForTurtlePerDay = Number(input[4]);

    foodForTurtlePerDay /= 1000;
    let neededFoodInKg = days * foodForCatPerDay + days * foodForDogPerDay + days * foodForTurtlePerDay ;

    if(neededFoodInKg >= leftFoodInKg){
        console.log(`${Math.ceil(neededFoodInKg - leftFoodInKg)} more kilos of food are needed.`);
        
    } else{
        console.log(`${Math.floor(leftFoodInKg - neededFoodInKg)} kilos of food left.`);
    }
}

feedingThePets(["5","10","2.1","0.8","321"]);