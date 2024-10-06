function repeatString(word,times) {
    let result = '';
    for(let i = 0; i < times; i++){
        result +=word;
    }

    console.log(result);
}

repeatString('abc',3);