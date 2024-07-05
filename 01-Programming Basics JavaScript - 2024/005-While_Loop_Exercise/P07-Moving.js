function moving(input){
    const width = Number(input.shift());
    const length = Number(input.shift());
    const height = Number(input.shift());

    let freeSpace = width * length * height;
    let spaceForBoxes = 0;

    while(true){
        let command = input.shift();
        if(command === "Done"){
            console.log(`${freeSpace- spaceForBoxes} Cubic meters left.`);
            break;
        }
        spaceForBoxes += Number(command);
        if(spaceForBoxes >= freeSpace){
            console.log(`No more free space! You need ${spaceForBoxes - freeSpace} Cubic meters more.`);
            break;
        }
    }
}

moving(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"]);    