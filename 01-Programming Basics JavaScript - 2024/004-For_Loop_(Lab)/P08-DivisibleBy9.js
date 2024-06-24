function divisible(input){
    const start = Number(input[0]);
    const end = Number(input[1]);

    const array = new Array();
    let sum = 0;

    for(let i = start; i<= end;i++){
        if(i % 9 == 0){
            array.push(i);
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(array.join("\n"));
}

divisible();