function getBill(input) {
    const product = input[0];
    const day = input[1];
    const quantity = Number(input[2]);

    let price = 0;

    if(day === "Saturday" || day === "Sunday"){
        switch(product){
            case "banana":
                price = 2.7;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.90;
                break;
            case "grapefruit":
                price = 1.60;
                break;
            case "kiwi":
                price = 3.00;
                break;
            case "pineapple":
                price = 5.60;
                break;
            case "grapes":
                price = 4.20;
                break;
        }
    } else if(day === "Monday" || day === "Tuesday" ||day === "Wednesday" ||day === "Thursday" ||day === "Friday"){
        switch(product){
            case "banana":
                price = 2.5;
                break;
            case "apple":
                price = 1.20;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.70;
                break;
            case "pineapple":
                price = 5.50;
                break;
            case "grapes":
                price = 3.85;
                break;
        }
    }

    if(price === 0){
        console.log("error");
    } else{
        let bil = quantity * price;

        console.log(bil.toFixed(2));
    }
}

getBill(["apple","Friday","3"]);