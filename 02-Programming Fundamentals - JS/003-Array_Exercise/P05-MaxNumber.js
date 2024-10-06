function findTopNumber(arr){
    let arrOfTopIns = [];
    let output ='';
    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        let isTop = true;
        for(let nextIndex = i+1; nextIndex < arr.length; nextIndex++){

            let nextElemt = arr[nextIndex];

            if(currentElement <= arr[nextIndex]){
               
                isTop = false;
                break;
            }
        }
        if(isTop){
            output += currentElement + ' ';
        }
    }
    console.log(output);
}

findTopNumber([27, 19, 42, 2, 13, 45, 48]);