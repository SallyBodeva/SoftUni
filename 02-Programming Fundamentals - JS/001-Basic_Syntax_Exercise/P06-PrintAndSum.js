function PrintSum(startIndex, endIndex) {
    let sum = 0;
    let numsPrinted = '';
    for (let i = startIndex; i <= endIndex ; i++) {
        numsPrinted += i +' ';
       sum += i;
    }
    console.log(numsPrinted);
    console.log(`Sum: ${sum}`);
}


PrintSum(5,10);