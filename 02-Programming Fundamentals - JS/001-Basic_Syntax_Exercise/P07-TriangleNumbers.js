function drawTriangle(n){
    for(let i = 0; i<=n; i++){

        let result = '';
        
        for(let j=1; j<=i; j++){
            result += i +' ';
        }
        console.log(result);
    }
}

drawTriangle(6);