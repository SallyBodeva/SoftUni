function ToCemtimeters(input){
    const INCHES_TO_CENTIMETERS = 2.54;

    const num = Number(input[0]);

    console.log(num*INCHES_TO_CENTIMETERS);
}

ToCemtimeters(["7"]);