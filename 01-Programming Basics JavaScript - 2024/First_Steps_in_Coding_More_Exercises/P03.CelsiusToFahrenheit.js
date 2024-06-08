function ToFahrenheit(input){
    const tempIncelcius  = Number(input[0]);

    const tempInFahrenheit = tempIncelcius * 1.8 + 32;

    console.log(tempInFahrenheit.toFixed(2));
}
 ToFahrenheit(["25"]);

