function swim(input){
    const prevousRecordInSecs = Number(input[0]);
    const meters = Number(input[1]);
    const timeFor1MeterInSecs = Number(input[2]);

    let ivanTime = meters * timeFor1MeterInSecs;
    ivanTime += (Math.floor(meters/15)) * 12.5;

    if(ivanTime > prevousRecordInSecs){
        console.log(`No, he failed! He was ${(ivanTime - prevousRecordInSecs).toFixed(2)} seconds slower.`);
    } else{
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    }
}

swim(["55555.67","3017","5.03"]);    