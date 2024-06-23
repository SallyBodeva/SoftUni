function getTickets(input){
    const NORMAL_TICKET_PRICE = 249.99;
    const VIP_TICKET_PRICE = 499.99;

    let budget = Number(input[0]);
    const ticketType = input[1];
    const peopleCount = Number(input[2]);

    let moneyFotTransport = 0;
    let neededMoney = 0;

    if(peopleCount >= 1 && peopleCount <= 4){
        moneyFotTransport = 0.75 * budget;
    } else if(peopleCount >= 5 && peopleCount <=9){
        moneyFotTransport = 0.6 * budget;
    } else if(peopleCount >= 10 && peopleCount <=24){
        moneyFotTransport = 0.5 * budget;
    } else if(peopleCount >=25 && peopleCount <=49){
        moneyFotTransport = 0.4 * budget;
    } else{
        moneyFotTransport = 0.25 * budget;
    }
    budget -= moneyFotTransport;
    switch (ticketType) {
        case "Normal":
            neededMoney = NORMAL_TICKET_PRICE * peopleCount;
            break;
        case "VIP":
            neededMoney = VIP_TICKET_PRICE * peopleCount;
            break;
    }

    if(budget >= neededMoney){
        console.log(`Yes! You have ${(budget - neededMoney).toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money! You need ${(neededMoney - budget).toFixed(2)} leva.`);
    }
}

getTickets(["30000","VIP","49"]);