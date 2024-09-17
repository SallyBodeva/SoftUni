function calculateTheResources(base, incerement){
    let stoneNeeeded = 0;
    let marbleNeeded = 0;
    let lapisNeeded = 0;
    let goldNeeded = 0;
    let finalHeight  = incerement;

    let floorCounter  = 0;

    while(base > 2){
        floorCounter++;
        stoneNeeeded += ((base-2) * (base-2)) * incerement;
        if(floorCounter % 5 === 0 ){
            lapisNeeded += ((base * 4) - 4) * incerement;
        } else{
            marbleNeeded += ((base * 4) - 4) * incerement;
        }
        base-=2;
        finalHeight+=incerement;
    }

    goldNeeded += Math.pow(base,base) * incerement;

    console.log(`Stone required: ${Math.ceil(stoneNeeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);   
}

calculateTheResources(23,0.5);