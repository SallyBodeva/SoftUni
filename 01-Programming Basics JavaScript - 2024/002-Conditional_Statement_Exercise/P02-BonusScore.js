function bonus(input) {
    const initialValue = Number(input[0]);

    let bonus = 0;

    if(initialValue <= 100){
        bonus += 5;
    } else if(initialValue <= 1000){
        bonus += initialValue * 0.2;
    } else{
        bonus += initialValue * 0.1;
    }

    if(initialValue % 2 === 0){
        bonus+=1;
    }
    if(initialValue % 10 ===5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(initialValue + bonus);
}

bonus(["175"]);