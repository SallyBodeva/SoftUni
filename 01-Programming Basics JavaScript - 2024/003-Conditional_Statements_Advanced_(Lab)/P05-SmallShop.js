function guessThePrice(input){
    const product = input[0];
    const city = input[1];
    const quantity = Number(input[2]);

    let bill = 0;
    if(city === "Sofia"){
        switch (product) {
            case "coffee":
                bill = quantity * 0.50;
                break;
            case "water":
                bill = quantity * 0.80;
                break;
            case "beer":
                bill = quantity * 1.20;
                break;
            case "sweets":
                bill = quantity * 1.45;
                break;
            case "peanuts":
                bill = quantity * 1.60;
                break;
        }
    } else if( city === "Plovdiv"){
        switch (product) {
            case "coffee":
                bill = quantity * 0.40;
                break;
            case "water":
                bill = quantity * 0.70;
                break;
            case "beer":
                bill = quantity * 1.15;
                break;
            case "sweets":
                bill = quantity * 1.30;
                break;
            case "peanuts":
                bill = quantity * 1.50;
                break;
        }
    } else{
        switch (product) {
            case "coffee":
                bill = quantity * 0.45;
                break;
            case "water":
                bill = quantity * 0.70;
                break;
            case "beer":
                bill = quantity * 1.10;
                break;
            case "sweets":
                bill = quantity * 1.35;
                break;
            case "peanuts":
                bill = quantity * 1.55;
                break;
        }
    }
    console.log(bill)
}

guessThePrice(["beer","Plovdiv","1"]);