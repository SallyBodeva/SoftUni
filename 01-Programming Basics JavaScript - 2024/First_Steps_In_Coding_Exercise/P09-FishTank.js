function fillThetank(input){
    const [length,width,height,percentage]= input;

    let volumeInCm = length * width * height;
    let volumeInLitters = volumeInCm / 1000;
    let result = volumeInLitters - (volumeInLitters * percentage * 0.01);

    console.log(result);
}

fillThetank(["85 ","75 ","47 ","17 "]);