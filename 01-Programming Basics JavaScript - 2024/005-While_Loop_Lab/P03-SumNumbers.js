function getNumsSum(input){
    const neededSum = Number(input[0]);
    let sum = 0;
    let index = 1;
    while(sum < neededSum){
        sum += Number(input[index++]);
    }
    console.log(sum);
}