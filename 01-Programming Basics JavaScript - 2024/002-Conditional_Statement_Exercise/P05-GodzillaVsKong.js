function filming(input) {
    const budget = Number(input[0]);
    const people = Number(input[1]);
    let clothesPerPerson = Number(input[2]);

    if(people > 150){
        clothesPerPerson *= 0.9;
    }
    let sum = people * clothesPerPerson + 0.10 * budget;

    if(budget >= sum){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`)
    }
}
  
    