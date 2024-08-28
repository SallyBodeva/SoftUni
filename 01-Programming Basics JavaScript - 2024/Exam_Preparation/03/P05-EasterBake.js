function calculate(input){
    const  breadsCount =Number(input.shift());

    let flourQuantity = 0;
    let sugarQuantity = 0;
    let maxFlour = 0;
    let maxSugar = 0;

    for(let i = 0; i < breadsCount; i++){
        let sugar = Number(input.shift());
        let flour = Number(input.shift());

        sugarQuantity += sugar;
        flourQuantity += flour;
        if(sugar > maxSugar){
            maxSugar = sugar;
        }
        if(flour > maxFlour){
            maxFlour = flour;
        }
    }

    let packsSugar = Math.ceil(sugarQuantity / 950);
    let packsFlour = Math.ceil(flourQuantity / 750);

    console.log(`Sugar: ${packsSugar}`);
    console.log(`Flour: ${packsFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

calculate(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"]);    