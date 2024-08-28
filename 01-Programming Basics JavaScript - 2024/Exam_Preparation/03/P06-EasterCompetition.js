function calculate(input){
    let cookCount = Number(input.shift());
    let maxPoints = 0;
    let bestCook = undefined;
    for(let i = 0; i < cookCount; i++){
        let name = input.shift();
        let points = 0;
        while(true){
            let command = input.shift();
            if(command === "Stop"){
                console.log(`${name} has ${points} points.`);
                if(points > maxPoints){
                    maxPoints = points;
                    bestCook = name;
                    console.log(`${name} is the new number 1!`);
                }
                break;
            }
            points+= Number(command);
        }

    }
    console.log(`${bestCook} won competition with ${maxPoints} points!`);
}

calculate(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"]);       