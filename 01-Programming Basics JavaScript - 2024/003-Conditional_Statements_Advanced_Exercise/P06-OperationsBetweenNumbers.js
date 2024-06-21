function mathOperations(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const operation = input[2];

    let result = 0;

    if(operation === "+" || operation === "-" || operation === "*"){
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
        }
        console.log(`${num1} ${operation} ${num2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
    } else if(operation === "/" || operation === "%"){
        if(num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
            process.exit(0);
        }
        switch (operation) {
            case "/":
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
                break;
          case "%":
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`);
                break;
        }
        
    }
    
}

mathOperations(["112","0","/"]);
