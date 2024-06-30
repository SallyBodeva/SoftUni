function addToBalance(input){
    let totalSum = 0;
    let command = input.shift();
    while(command != "NoMoreMoney"){
        if(Number(command) < 0){
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${Number(command).toFixed(2)}`);
        totalSum += Number(command);
        command = input.shift();
    }
    
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

addToBalance(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"]);    