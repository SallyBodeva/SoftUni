function stepGoal(input){
    let steps = 0;
    while(true){
        let command = input.shift();
        if(command === "Going home"){
            let stepsToHome = Number(input.shift());
            steps += stepsToHome;
            break;
        }
        steps += Number(command);
        if(steps >= 10000){
            break;
        }
    }
    if(steps >= 10000){
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}

stepGoal(["1000",
    "1500",
    "2000",
    "6500"]);    