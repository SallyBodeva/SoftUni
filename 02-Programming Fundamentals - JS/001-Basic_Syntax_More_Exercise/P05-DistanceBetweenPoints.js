function getDistance(x1,y1,x2,y2) {
    
    let length = Math.abs(x1-x2);
    let width = Math.abs(y1-y2);

    let result = Math.sqrt(length*length + width * width);
    console.log(result);
    
}

getDistance(2.34, 15.66, -13.55, -2.9985);