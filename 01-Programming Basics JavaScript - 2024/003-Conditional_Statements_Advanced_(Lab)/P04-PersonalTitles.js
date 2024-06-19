function title(input) {
    const personAge = Number(input[0]);
    const personGender = input[1];

    if(personGender === "f" && personAge >=16 ){
        console.log("Ms.");
    } else if(personGender === "f"){
        console.log("Miss");
    } else if(personGender === "m" && personAge >=16 ){
        console.log("Mr.");
    } else{
        console.log("Master");
    }
}
title(["13.5","m"]);    