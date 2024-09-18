function translate(num) {
    let namesOfNums = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let lastNum = num % 10;

    console.log(namesOfNums[lastNum]);
    
}

translate(1643);