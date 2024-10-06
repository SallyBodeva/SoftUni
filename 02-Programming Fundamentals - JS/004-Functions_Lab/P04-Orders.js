function calculatePrice(product, quantity) {
    const WATER_PRICE = 1;
    const COFFEE_PRICE = 1.5;
    const COKE_PRICE = 1.4;
    const SNACKS_PRICE = 2;

    let result = 0;
    switch(product){
        case"water":
            result = WATER_PRICE * quantity;
            break;
        case"coffee":
            result = COFFEE_PRICE * quantity;
            break;
        case"snack":
            result = SNACKS_PRICE * quantity;
            break;
        case"coke":
            result = COKE_PRICE * quantity;
            break;
    }
}