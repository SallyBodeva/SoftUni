function guessThePassword(input){
    const username = input.shift();
    const password = input.shift();

    let guess = input.shift();
    while(guess !== password){
        guess = input.shift();
    }
    console.log(`Welcome ${username}!`)
}
