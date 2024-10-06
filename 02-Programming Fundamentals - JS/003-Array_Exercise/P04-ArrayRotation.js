function rotate(arr, rotationCount) {

    for(let rotation = 0; rotation < rotationCount; rotation++ ){ 
        arr.push(arr.shift());
    }

    console.log(arr.join(' - '));
    
}

rotate([2, 4, 15, 31], 5);