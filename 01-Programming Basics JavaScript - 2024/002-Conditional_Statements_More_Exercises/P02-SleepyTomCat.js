function sleepingTom(input) {
    const PLAYS_PER_WORKING_DAY = 63;
    const PLAYS_PER_HOLIDAY = 127;

    const daysOff = Number(input[0]);

    let totalMinsInPlays = (daysOff * PLAYS_PER_HOLIDAY) + (365 - daysOff) * PLAYS_PER_WORKING_DAY;
    if(totalMinsInPlays > 30000){
        console.log(`Tom will run away`);
        console.log(`${Math.floor((totalMinsInPlays - 30000) / 60)} hours and ${(totalMinsInPlays - 30000) % 60} minutes more for play`);
    } else{
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor((30000 - totalMinsInPlays) / 60)} hours and ${(30000 - totalMinsInPlays) % 60} minutes less for play`);
    }
}
