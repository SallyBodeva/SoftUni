function calculateCircleArea(input){
    const radius = Number(input[0]);

    console.log((Math.PI * radius * radius).toFixed(2));
    console.log((Math.PI * radius * 2).toFixed(2));
}

calculateCircleArea(["3"]);