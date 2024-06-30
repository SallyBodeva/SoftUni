function getSequence(input){
    const maxValue = Number(input[0]);

    let element = 1;
    while(element <= maxValue){
        console.log(element);
        element = 2 * element + 1; 
    }
}
getSequence(["8"]);