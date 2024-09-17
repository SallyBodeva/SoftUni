function guessThePassword(input) {
   let initialPassword =  input[0];
   let correctPassword = initialPassword.split('').reverse().join('');

    let wrongGuessesCount = 0;

   for(let i=1; i < input.length; i++){
    if(input[i] === correctPassword){
        console.log(`User ${initialPassword} logged in.`);
        break;
    } else{
        wrongGuessesCount++;
        if(wrongGuessesCount === 4){
            console.log(`User ${initialPassword} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
    }
   }
    
}

guessThePassword(['sunny','rainy','cloudy','sunny','not sunny']);