function wordsPower(input){
    let strongestWord = undefined;
    let strongestWordPower = 0;
    while(true){
        let word = input.shift();
        if(word === "End of words"){
            break;
        }
        let wordCount = word.length;
        let wordPower = 0;
        for(let i = 0; i < wordCount; i++){
            wordPower += word.charCodeAt(i);
        }
        if(word[0] === 'A' ||word[0] === 'a' || word[0] === 'o' ||word[0] === 'O' || word[0] === 'u' || word[0] === 'U' || word[0] === 'e' || word[0] === 'E' || word[0] === 'I' || word[0] === 'i' || word[0] === 'y' || word[0] === 'Y'){
            wordPower *= wordCount
        }else{
            wordPower = Math.floor(wordPower / wordCount);
        }
        if(wordPower > strongestWordPower){
            strongestWordPower = wordPower;
            strongestWord = word;
        }
    }

    console.log(`The most powerful word is ${strongestWord} - ${strongestWordPower}`);
}

wordsPower(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"]);    