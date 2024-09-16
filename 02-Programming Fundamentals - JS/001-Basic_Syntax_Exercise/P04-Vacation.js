function calculateTotalBill(peopleCount,vacationType,day) {
   let singlePrice = 0;

    switch(vacationType){
        case "Students":
            if(day === "Friday"){
                singlePrice = 8.45;
            } else if(day === "Saturday"){
                singlePrice = 9.8;
            } else{
                singlePrice = 10.46;
            }
            break;
        case "Business":
            if(day === "Friday"){
                singlePrice = 10.9;
            } else if(day === "Saturday"){
                singlePrice = 15.6;
            } else{
                singlePrice = 16;
            }
            break;
        case "Regular":
            if(day === "Friday"){
                singlePrice = 15;
            } else if(day === "Saturday"){
                singlePrice = 20;
            } else{
                singlePrice = 22.5;
            }
            break;
    }

    let totalPrice = singlePrice * peopleCount;
    if(vacationType=="Students" && peopleCount >=30){
        totalPrice *= 0.85;
    } else if (vacationType =="Business" &&  peopleCount >=100){
        totalPrice -= (singlePrice * 10);
    } else if(vacationType =="Regular" && (peopleCount >= 10 && peopleCount <= 20)){
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}

calculateTotalBill(40,
    "Regular",
    "Saturday"
    );