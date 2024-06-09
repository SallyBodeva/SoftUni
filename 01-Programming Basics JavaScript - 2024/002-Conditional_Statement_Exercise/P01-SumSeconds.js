function sumSecs(input){
    const [firstPlayer, secPlayer, thirdPlayer] = input;

    let sum = Number(firstPlayer) + Number(secPlayer) + Number(thirdPlayer);

    let resultMinutes = Math.floor(sum/60);
    let resultSecs = sum % 60;

    if(resultSecs<10){
        console.log(`${resultMinutes}:0${resultSecs}`);
    } else{
        console.log(`${resultMinutes}:${resultSecs}`)
    }
}

sumSecs(["22","7","34"]);
    