function solve(n) {
    let sum = 0;
    let initial = 1;
    for(let i = 0; i < n;i++){
        console.log(initial);
        sum+= initial;
        initial+=2;
    }
    console.log(`Sum: ${sum}`);
}

solve(5);