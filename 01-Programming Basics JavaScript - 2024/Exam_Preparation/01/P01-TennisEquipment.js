function calculatePrice(input) {
    const tennisRacketPrice = Number(input[0]);
    const tennisRacketCount = Number(input[1]);
    const trainersCount = Number(input[2]);

    let racketPrice = tennisRacketCount * tennisRacketPrice;
    let trainersPrice = trainersCount * (tennisRacketPrice / 6);
    let otherEquipment = (racketPrice + trainersPrice) * 0.2;

    let total = otherEquipment + racketPrice + trainersPrice;

    console.log(`Price to be paid by Djokovic ${Math.floor(total / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(total * 7 / 8)}`);
}

calculatePrice(["850","4","2"]);