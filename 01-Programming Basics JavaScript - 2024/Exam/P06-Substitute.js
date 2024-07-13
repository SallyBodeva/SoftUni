function validChanges(input) {
    let changes = 0;

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    for (let i = k; i <= 8; i++) {
        for (let j = 9; j >= l; j--) {
            if (i % 2 === 0 && j % 2 !== 0) {
                for (let s = m; s <= 8; s++) {
                    for (let b = 9; b >= n; b--) {
                        if (s % 2 === 0 && b % 2 !== 0) {
                            let firstNumber = `${i}${j}`;
                            let secondNumber = `${s}${b}`;
                            
                            if (firstNumber !== secondNumber) {
                                console.log(`${firstNumber} - ${secondNumber}`);
                                changes++;
                                if (changes >= 6) {
                                    return;
                                }
                            } else {
                                console.log(`Cannot change the same player.`);
                            }
                        }
                    }
                }
            }
        }
    }
}

validChanges(["7",
    "6",
    "8",
    "5"]);     