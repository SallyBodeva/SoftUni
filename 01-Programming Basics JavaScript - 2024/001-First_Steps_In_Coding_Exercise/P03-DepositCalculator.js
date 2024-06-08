function deposit(input){
    const depositSum = Number(input[0]);
    const termInMonths = Number(input[1]);
    const rate = Number(input[2]);

    let result = depositSum + termInMonths*((depositSum*rate*0.01)/12);

    console.log(result);
}

deposit(["200 ","3 ","5.7 "]);