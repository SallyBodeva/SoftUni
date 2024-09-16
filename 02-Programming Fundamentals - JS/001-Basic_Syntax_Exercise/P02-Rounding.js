
function roundNumber(num, precision) {
    if(precision > 15 ){
        precision = 15;
    }
    let numberedFixed = num.toFixed(precision);
    let result = parseFloat(numberedFixed);
    console.log(result);
}

roundNumber(10.50,2)