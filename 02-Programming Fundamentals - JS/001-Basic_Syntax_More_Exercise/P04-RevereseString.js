function reverse(word) {
    // First way
    // let reversed = word.split('').reverse().join('');
    // console.log(reversed);


    // Second way
    
    let result = '';

    for(let i= word.length-1; i >=0; i--){
        result +=word[i];
    }

    console.log(result);
    
}

reverse("Hello");