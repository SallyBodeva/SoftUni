function vacation(input){
    const neededMoneyForVacation = Number(input.shift());
    let savedMoney = Number(input.shift());

    let neededDays = 0;
    let spendingDaysCount = 0;

    while(true){
        let command = input.shift();
        let money = Number(input.shift());
        if(command === "save"){
            savedMoney += money;
            neededDays++;
            spendingDaysCount = 0;
            if(savedMoney >= neededMoneyForVacation){
                console.log(`You saved the money for ${neededDays} days.`);
                break;
            }
        } else if(command === "spend"){
            spendingDaysCount++;
            savedMoney -= money;
            if(savedMoney < 0){
                savedMoney = 0;
            }
            neededDays++;
            if(spendingDaysCount === 5){
                console.log("You can't save the money.");
                console.log(`${neededDays}`);
                break;
            }
        }
    }
}
