function oscars(input) {
    const boundary = 1250.5;

    const actor = input[0];
    let points = Number(input[1]);
    const judgesCount = Number(input[2]);

    for (let i = 0; points <= boundary && i < judgesCount; i++) {
        const judgesName = input[3 + i * 2];
        const judgesPoints = Number(input[4 + i * 2]);

        points += (judgesPoints * judgesName.length) / 2;
    }

    if (points > boundary) console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    else console.log(`Sorry, ${actor} you need ${(boundary - points).toFixed(1)} more!`);
}