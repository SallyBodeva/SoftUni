function movie(input) {
    const seriesName = input[0];
    const durationEpisode = Number(input[1]);
    const durationBreak = Number(input[2]);

    let lunchTime = durationBreak / 8;
    let relaxTime = durationBreak / 4;

    let leftTimeForMovie = durationBreak - (lunchTime + relaxTime);
    if(leftTimeForMovie >= durationEpisode){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTimeForMovie - durationEpisode)} minutes free time.`);
    } else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(durationEpisode - leftTimeForMovie)} more minutes.`);
    }
}

movie(["Game of Thrones","60","96"]);    