function replace(oldWord,replacement,match) {
    let newWord = oldWord.replace('_',replacement);
    if(newWord === match){
        console.log("Matched");
    } else{
        console.log("Not Matched");
    }
}

replace("Str_ng",'i',"Strong");