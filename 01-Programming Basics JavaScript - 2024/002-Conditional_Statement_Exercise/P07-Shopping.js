function shopping(input) {
    const budget = Number(input[0]);
    const graphicCards = Number(input[1]);
    const processor = Number(input[2]);
    const ram = Number(input[3]);

    let cardsPrice = graphicCards * 250;
    let processorsPrice = (cardsPrice * 0.35) * processor;
    let ramPrice = (cardsPrice * 0.10) * ram;

    let result = cardsPrice + processorsPrice + ramPrice;
    if(graphicCards > processor){
        result *= 0.85;
    }

    if(budget >= result){
        console.log(`You have ${(budget-result).toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${(result - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45","3","1","1"]);    