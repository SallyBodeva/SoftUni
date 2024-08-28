function calculate(input){
    const EASTER_BREAD_PRICE = 4;
    const EGG_PRICE = 0.45;
    
    let guests = Number(input.shift());
    let budget = Number(input.shift());

    let neededMoney = Math.ceil(guests / 3) * EASTER_BREAD_PRICE + guests * 2 * EGG_PRICE;

    if(budget >= neededMoney){
        console.log(`Lyubo bought ${Math.ceil(guests / 3)} Easter bread and ${guests * 2} eggs.`);
        console.log(`He has ${(budget - neededMoney).toFixed(2)} lv. left.`);
    } else{
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(neededMoney - budget).toFixed(2)} lv. more.`);
    }
}

calculate(["9",
    "12"]);    