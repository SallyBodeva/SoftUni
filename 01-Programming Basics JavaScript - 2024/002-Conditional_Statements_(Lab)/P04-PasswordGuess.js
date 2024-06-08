function guessPassword(input){
    const PASSWORD = "s3cr3t!P@ssw0rd";
    const userGuess = input[0];

    if(PASSWORD===userGuess){
        console.log("Welcome");
    } else{
        console.log("Wrong password!");
    }
}

guessPassword("s3cr3t!P@ssw0rd");