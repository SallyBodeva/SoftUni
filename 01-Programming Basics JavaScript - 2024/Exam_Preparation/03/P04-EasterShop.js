function calculate(input){
    let initialEggsCount = Number(input.shift());
    let sold = 0;
    while(true){
        let commmand = input.shift();
        if(commmand === "Close"){
            console.log(`Store is closed!`);
            console.log(`${sold} eggs sold.`);
            break;
        }
        let egss = Number(input.shift());
        if(commmand === "Buy"){
            if(egss > initialEggsCount){
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${initialEggsCount}.`);
                break;
            }
            initialEggsCount -= egss;
            sold += egss;
        }else{
            initialEggsCount += egss;
        }
    }
}

calculate(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"]);    