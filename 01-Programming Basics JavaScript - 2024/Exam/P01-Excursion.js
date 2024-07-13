function calculateSum(input){
    const peopleCount = Number(input[0]);
    const nightsCount = Number(input[1]);
    const travelCardsCount = Number(input[2]);
    const museumTicketsCount = Number(input[3]);

    let sumPerPerson = 0;

    sumPerPerson += nightsCount * 20;
    sumPerPerson += travelCardsCount * 1.6;
    sumPerPerson += museumTicketsCount * 6;

    let total = sumPerPerson * peopleCount;
    total *= 1.25;
    console.log(total.toFixed(2));
}

calculateSum(["131",
    "9",
    "33",
    "46"]);    