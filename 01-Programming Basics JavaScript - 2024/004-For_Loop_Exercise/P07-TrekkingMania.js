function climbing(input){
    const groupCount = Number(input[0]);

    let climbersMusala = 0;
    let climebersMonblan = 0;
    let climbersKilimanjaro = 0;
    let climbersK2 = 0;
    let climbersEverest = 0;

    let totalClimbers  = 0;
    
    for(let i = 0; i < groupCount; i++){
        const peopleCount = Number(input[i+1]);
        totalClimbers += peopleCount;
        if(peopleCount <= 5){
            climbersMusala += peopleCount;
        } else if(peopleCount <= 12){
            climebersMonblan += peopleCount;
        } else if(peopleCount <= 25){
            climbersKilimanjaro += peopleCount;
        } else if(peopleCount <= 40){
            climbersK2 += peopleCount;
        } else{
            climbersEverest += peopleCount;
        }
    }

    console.log(`${((climbersMusala / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climebersMonblan / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersKilimanjaro / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersK2 / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((climbersEverest / totalClimbers) * 100).toFixed(2)}%`);

}

climbing(["10","10","5","1","100","12","26","17","37","40","78"]);    