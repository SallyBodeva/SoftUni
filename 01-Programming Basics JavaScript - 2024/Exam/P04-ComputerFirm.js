function computerStore(input){
    const n = Number(input.shift());

    let sells = 0;
    let rating = 0;
    for(let i = 0;i < n;i++){
        let model = Number(input.shift());
        let neededDigit = model % 10;
        model = Math.floor(model / 10);
        rating += Number(neededDigit);
        if(neededDigit === 3){
            sells += 0.5 * Number(model);
        }else if(neededDigit === 4){
            sells += 0.7 * Number(model);
        }else if(neededDigit === 5){
            sells += 0.85 * Number(model);
        }else if(neededDigit === 6){
            sells += Number(model);
        }
    }

    console.log(sells.toFixed(2));
    console.log((rating / n).toFixed(2));
}

computerStore(["5",
    "122",
    "156",
    "202",
    "214",
    "185"]);       