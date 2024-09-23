function asciiValues(char1, char2, char3){
    let reversed = `${char3}${char2}${char1}`;

    let ascii = `${char3.charCodeAt()} ${char2.charCodeAt()} ${char1.charCodeAt()}`;

    console.log(reversed);
    console.log(ascii);
}

asciiValues('a','b','c');