function YardGreening(input){
    const PRICE_PER_AREA = 7.61;
    const DISCOUNT = 18;

    let bill = Number(input[0])*PRICE_PER_AREA;
    let discountPerArea = bill*DISCOUNT;

    console.log(`The final price is: ${bill-discountPerArea} lv.`);
    console.log(`The discount is: ${discountPerArea} lv.`);
}

YardGreening(["550"]);