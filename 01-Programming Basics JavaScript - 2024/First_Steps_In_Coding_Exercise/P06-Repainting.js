function repaint(input){
    const PLASTIC_PRICE = 1.5;
    const PAINT_PER_LITTER = 14.5;
    const DIFLUENT_PER_LITTER = 5;

    const plasticNeeeded = Number(input[0]);
    const paintNeeded = Number(input[1]);
    const difluentNeeded = Number(input[2]);
    const workingHours = Number(input[3]);

    let materialsBill = PAINT_PER_LITTER*(paintNeeded+(paintNeeded*0.1)) +
     PLASTIC_PRICE*(plasticNeeeded+2)+DIFLUENT_PER_LITTER*difluentNeeded + 0.4;
    let workersSalary = (materialsBill * 0.30) * workingHours;
    let result = materialsBill+workersSalary;

    console.log(result);
}

repaint(["10 ","11 ","4 ","8 "]);