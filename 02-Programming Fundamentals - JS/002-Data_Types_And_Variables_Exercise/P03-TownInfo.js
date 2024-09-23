function getTownInfo(town, population, area){
   let townValidation = town.length >= 3;
   let populationValidation = population >= 0;
   let areaValidation = area >= 0;


    if(!townValidation){
        console.log("Town name must be at least 3 characters!");
    }
    if(!populationValidation){
        console.log("Population must be a positive number!");
    }
    if(!areaValidation){
        console.log("Area must be a positive number!");
    }


    if(townValidation && populationValidation && areaValidation){
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}

getTownInfo('Sofia',2329103,23);