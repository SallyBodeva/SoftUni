function Feeding(input){
    const DOG_FOOD_PRICE = 2.5;
    const CAT_FOOD_PRICE = 4;

    let foodDog = Number(input[0]);
    let foodCat = Number(input[1]);

    let bill = foodCat*CAT_FOOD_PRICE+foodDog*DOG_FOOD_PRICE;
    console.log(`${bill} lv.`);
}

Feeding(["5","4"]);