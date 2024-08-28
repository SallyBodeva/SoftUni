function calculateEasterNeeds(input){
    const EASTER_BREAD_PRICEC = 3.2;
    const EGGS_PRICE = 4.35;
    const COOKIES_PRICE = 5.40;
    const EGGS_PAINT_PER_EGG = 0.15;

    let easterBreads = Number(input.shift());
    let eggs = Number(input.shift());
    let cookies = Number(input.shift());

    let total = (easterBreads * EASTER_BREAD_PRICEC) + (eggs * EGGS_PRICE) + (cookies * COOKIES_PRICE) + (eggs * 12 * EGGS_PAINT_PER_EGG);

    console.log(total.toFixed(2));
}

calculateEasterNeeds(["3",
    "2",
    "3"]);    