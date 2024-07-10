function calculateScore(input) {
    let wins = 0;
    let drawns = 0;
    let loses = 0;

  for(let i = 1; i<=3; i++){
    let score = input.shift();
    if(Number(score[0]) > Number(score[2])){
        wins++;
    } else if(Number(score[0]) === Number(score[2])){
        drawns++;
    } else{
        loses++;
    }
  }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${drawns}`);
}
