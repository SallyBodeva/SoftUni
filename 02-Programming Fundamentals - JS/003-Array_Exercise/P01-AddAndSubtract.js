function addAndSubstract(input) {
    let initialSum  = 0;

    for(let num of input){
        initialSum += num;
    }

    for(let i = 0; i < input.length; i++){
        if(input[i] % 2 == 0){
            input[i] += i;
        }else{
            input[i] -= i;
        }
    }

    let eventualSum = 0;
    for(let num of input){
        eventualSum += num;
    }

    console.log(input.toString());
    console.log(initialSum);
    console.log(eventualSum);
}


addAndSubstract([-5, 11, 3, 0, 2]);