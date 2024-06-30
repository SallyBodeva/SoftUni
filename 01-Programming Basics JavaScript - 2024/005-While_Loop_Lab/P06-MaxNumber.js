function findMax(input){
    let max = input.shift();

    while(true){
        let nextElement = input.shift();
        if(nextElement === "Stop"){
            break;
        }
        if(Number(nextElement) > Number(max)){
            max = nextElement;
        }
    }
    console.log(max);
}