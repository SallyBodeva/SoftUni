function fillThePool(input) {
    const volume = Number(input[0]);
    const pipe1 = Number(input[1]);
    const pipe2 = Number(input[2]);
    const hours = Number(input[3]);

    let pipe1Filling = pipe1 * hours;
    let pipe2Filling = pipe2 * hours;
    let totalFilling = pipe1Filling + pipe2Filling;

    if(totalFilling <= volume){
        console.log(`The pool is ${((totalFilling / volume) * 100).toFixed(2)}% full. Pipe 1: ${((pipe1Filling / totalFilling) * 100).toFixed(2)}%. Pipe 2: ${((pipe2Filling / totalFilling) * 100).toFixed(2)}%."`);
    } else{
        console.log(`For ${hours} hours the pool overflows with ${(totalFilling - volume).toFixed(2)} liters."`);
    }
}
fillThePool(["1000","100","120","3"]);