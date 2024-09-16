function determineYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log("yes");
    }else{
        console.log("no");
    }
}

determineYear(1984);
determineYear(3);
determineYear(4);