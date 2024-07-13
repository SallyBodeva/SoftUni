function calculateBill(input){
    const shirtPrice = Number(input[0]);
    const neededSum = Number(input[1]);

    let shortsPrice = 0.75 * shirtPrice;
    let socksPrice = 0.2 * shortsPrice;
    let shoes = (shirtPrice + shortsPrice) * 2;

    let bill= (shirtPrice + shortsPrice + socksPrice + shoes) * 0.85;

    if(bill >= neededSum){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${bill.toFixed(2)} lv.`);
    } else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(neededSum-bill).toFixed(2)} lv. more.`);
    }
}

calculateBill(["55",
    "310"]);    