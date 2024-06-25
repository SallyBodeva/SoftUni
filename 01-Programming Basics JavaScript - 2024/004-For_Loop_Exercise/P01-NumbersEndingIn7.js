// Solution 1
/* function nums(input){
    for(let i = 0; i <= 1000; i++){
        if(i % 10 === 7){
            console.log(i);
        }
    }
} */

// solution 2
function nums(input){
    for(let i = 7; i <= 1000; i+=10){
        console.log(i);
    }
}

nums();