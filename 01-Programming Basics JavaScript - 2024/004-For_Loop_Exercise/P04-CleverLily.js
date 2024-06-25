function microBusiness(input){
    const age = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const toyPrice = Number(input[2]);

    let toyCount = 0;
    let sum = 0;
    let lastBirthDayMoney = 10;

    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            sum += lastBirthDayMoney;
            sum--;
            lastBirthDayMoney += 10;
        }else{
            toyCount++;
        }
    }

    sum += toyCount * toyPrice;

    if(sum >= washingMachinePrice){
        console.log(`Yes! ${(sum-washingMachinePrice).toFixed(2)}`);
    } else{
        console.log(`No! ${(washingMachinePrice - sum).toFixed(2)}`);
    }
}

microBusiness(["10","170.00","6"]);    