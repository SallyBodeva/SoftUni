function caclculatePoints(input){
    const name = input[0];
    let actorsPoints = Number(input[1]);
    const judgesCount = Number(input[2]);
    for(let i = 3; i < judgesCount * 2 - 1; i++){
        let judgesPointsFromName = input[i].length;
        i++;
        let points = Number(input[i]);
        actorsPoints += (judgesPointsFromName * points) / 2;

        if(actorsPoints >= 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${actorsPoints}!`);
            break;
        }
    }

    if(actorsPoints >= 1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${actorsPoints}!`);
    } else{
        console.log(`Sorry, ${name} you need ${1250.5 - actorsPoints} more!`);
    }
}

caclculatePoints(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);    