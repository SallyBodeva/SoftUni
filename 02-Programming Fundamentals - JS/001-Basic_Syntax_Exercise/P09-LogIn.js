function guessThePassword(input) {
   let initialPassword =  input.shift();
   let correctPassword = initialPassword.split('').reverse().join('');

    let wrongGuessesCount = 0;

   for(let i=1; i <= input.length; i++){
    if(initialPassword === correctPassword){
        console.log(`User ${initialPassword} logged in.`);
        break;
    } else{
        console.log(`Incorrect password. Try again.`);
        wrongGuessesCount++;
    }

    if(wrongGuessesCount>=4){
        console.log(`User ${initialPassword} blocked!`);
        break;
    }
   }
    
}

guessThePassword(['Acer','login','go','let me in','recA']);