function supply(input){
    const PEN_PRICE = 5.80;
    const MARKER_PRICE = 7.20;
    const CLEANER_PRICE_PER_LITTER = 1.20;

    const pens = Number(input[0]);
    const markers = Number(input[1]);
    const boardCleaner = Number(input[2]);
    const discount = Number(input[3]);

    let result = (pens*PEN_PRICE) + (markers*MARKER_PRICE) + (boardCleaner*CLEANER_PRICE_PER_LITTER);
    result-=(result*(discount*0.01));

    console.log(result);
}

supply(["2 ","3 ","4 ","25 "]);