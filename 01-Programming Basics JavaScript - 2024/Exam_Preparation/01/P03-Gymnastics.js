function gymnastic(input) {
    const country = input[0];
    const trainingEqupment = input[1];

    let totalPoints = 0;
    switch(country){
        case "Bulgaria":
            if(trainingEqupment === "ribbon"){
                totalPoints += 9.600;
                totalPoints += 9.400;
            } else if(trainingEqupment === "hoop"){
                totalPoints += 9.550;
                totalPoints += 9.750;
            } else{
                totalPoints += 9.500;
                totalPoints += 9.400;
            }
            break;
        case "Russia":
            if(trainingEqupment === "ribbon"){
                totalPoints += 9.100;
                totalPoints += 9.400;
            } else if(trainingEqupment === "hoop"){
                totalPoints += 9.300;
                totalPoints += 9.800;
            } else{
                totalPoints += 9.600;
                totalPoints += 9.000;
            }
            break;
        case "Italy":
            if(trainingEqupment === "ribbon"){
                totalPoints += 9.200;
                totalPoints += 9.500;
            } else if(trainingEqupment === "hoop"){
                totalPoints += 9.450;
                totalPoints += 9.350;
            } else{
                totalPoints += 9.700;
                totalPoints += 9.150;
            }
            break;
    }
    
    	console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${trainingEqupment}.`);
        console.log(`${((20-totalPoints) / 20 * 100).toFixed(2)}%`);
}
gymnastic(["Russia",
    "rope"]);      