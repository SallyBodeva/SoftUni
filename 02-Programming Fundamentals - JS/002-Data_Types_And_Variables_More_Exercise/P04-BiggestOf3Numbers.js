function findTheBiggest(num1,num2,num3) {
    //First way
    //console.log(Math.max(num1,num2,num3));

    //Second way
    let maxNum = num1;
    if(num2 > maxNum){
        maxNum = num2;
    } 
    if(num3 > maxNum){
        maxNum = num3;
    }
    console.log(maxNum);
}