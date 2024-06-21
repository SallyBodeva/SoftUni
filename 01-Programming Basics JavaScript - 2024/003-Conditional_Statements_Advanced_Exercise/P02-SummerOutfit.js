function chooseOutfit(input) {
    const temperatures = Number(input[0]);
    const partOfTheDay = input[1];

    let upper = undefined;
    let shoes = undefined;

    if((temperatures >= 10 && temperatures <= 18) && partOfTheDay == "Morning"){
        switch (partOfTheDay) {
            case "Morning":
                upper = "Sweatshirt";
                shoes = "Sneakers";
                break;
            default:
                upper = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if(temperatures > 18 && temperatures <= 24){
        switch (partOfTheDay) {
            case "Afternoon":
                upper = "T-Shirt";
                shoes = "Sandals";
                break;
            default:
                upper = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else{
        switch (partOfTheDay) {
            case "Morning":
                upper = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                upper = "Swim Suit";
                shoes = "Barefoot";
                break;
            default:
                upper = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }

     console.log(`It's ${temperatures} degrees, get your ${upper} and ${shoes}.`);
}

chooseOutfit(["16","Morning"]);