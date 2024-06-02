function delivery(input){
    const CHICKEN_PRICE = 10.35;
    const FISH_PRICE = 12.40;
    const VEGETARIAN_PRICE = 8.15;

    let chickenMeals = Number(input[0]);
    let fishMeals = Number(input[1]);
    let vegetarianMeals = Number(input[2]);

    let foodBill = chickenMeals * CHICKEN_PRICE + fishMeals * FISH_PRICE + vegetarianMeals * VEGETARIAN_PRICE;
    let dessertBill = foodBill * 0.20;

    let result = foodBill+dessertBill + 2.5;

    console.log(result);
}

delivery(["2","4","3"]); 