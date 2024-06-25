function calculateSalary(input){
    const openedTabs = Number(input[0]);
    let initialSalary = Number(input[1]);

    for(let i = 0; i < openedTabs; i++){
        switch (input[2+i]) {
            case "Facebook":
                initialSalary -= 150;
                break;
            case "Instagram":
                initialSalary -= 100;
                break;
            case "Reddit":
                initialSalary -= 50;
                break;
        }
        if(initialSalary <= 0){
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if(initialSalary > 0){
        console.log(initialSalary);
    }
}

calculateSalary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);    
    