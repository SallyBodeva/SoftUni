function calculateWorkingDesks(input){
    const HALL_SPACE = 100;
    const DESK_WIDTH = 70;
    const DESK_LENGTH = 120;
    const[h,w] = input;


    const widthInCentimeters = w * 100 - 100;
    const heightInCentimeters = h * 100;

    const desksPerRow = Math.floor(widthInCentimeters / DESK_WIDTH);
    const desksPerCol = Math.floor(heightInCentimeters / DESK_LENGTH);

    const totalDesks = desksPerCol * desksPerRow - 3;

    console.log(totalDesks);
}

calculateWorkingDesks(["8.4","5.2"]);