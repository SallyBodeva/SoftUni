function isValid(input) {
    const num = Number(input[0]);

    if( !((num >= 100 && num <= 200) || num === 0)){
        console.log("invalid");
    }
}
isValid(["201"]);