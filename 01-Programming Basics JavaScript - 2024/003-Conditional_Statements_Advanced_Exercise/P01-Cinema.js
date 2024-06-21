function calculateIncome(input) {
    const movieType = input[0];
    const rows = Number(input[1]);
    const cols = Number(input[2]);

    let tikcetPrice = 0;
     switch (movieType) {
        case "Premiere":
            tikcetPrice = 12;
            break;
         case "Normal":
            tikcetPrice = 7.50;
            break;
        case "Discount":
            tikcetPrice = 5;
            break;
     }

    let result = rows * cols * tikcetPrice;
    console.log(`${result.toFixed(2)} leva`);
}

calculateIncome(["Premiere","10","12"]);