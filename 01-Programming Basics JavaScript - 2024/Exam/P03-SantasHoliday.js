function santasHoliday(input){
    const daysForAccommodation = Number(input[0]);
    const roomType = input[1];
    const rating = input[2];

    let bill = 0;

    switch(roomType){
        case "room for one person":
            bill += (daysForAccommodation - 1) * 18;
            break;
        case "apartment":
            bill += (daysForAccommodation - 1) * 25;
            if(daysForAccommodation < 10){
                bill *= 0.7;
            } else if(daysForAccommodation >= 10 && daysForAccommodation <= 15){
                bill *= 0.65;
            } else{
                bill *= 0.5;
            }
            break;
        case "president apartment":
            bill += (daysForAccommodation - 1) * 35;
            if(daysForAccommodation < 10){
                bill *= 0.9;
            } else if(daysForAccommodation >= 10 && daysForAccommodation <= 15){
                bill *= 0.85;
            } else{
                bill *= 0.8;
            }
            break;
    }
    if(rating === "positive"){
        bill *= 1.25;
    } else{
        bill *= 0.9;
    }
    console.log(bill.toFixed(2));
}

santasHoliday(["30",
    "president apartment",
    "negative"]);     