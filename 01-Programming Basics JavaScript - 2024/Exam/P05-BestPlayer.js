function chooseTheBestPlayer(input){
    let bestPLayer = undefined;
    let bestScore = 0;
    while(true){
        let player = input.shift();
        if(player === "END"){
            console.log(`${bestPLayer} is the best player!`);
            if(bestScore >= 3){
                console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
            } else{
                console.log(`He has scored ${bestScore} goals.`);
            }
           
            break;
        }
        let score = Number(input.shift());
        if(score > bestScore){
            bestPLayer = player;
            bestScore = score;
        }
        if(score >= 10){
            console.log(`${bestPLayer} is the best player!`);
            console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
            break;
        }
    }
}

chooseTheBestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"]);    