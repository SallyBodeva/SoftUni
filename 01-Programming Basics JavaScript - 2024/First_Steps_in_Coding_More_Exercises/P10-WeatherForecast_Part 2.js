function forecast(input){
    const weather = Number(input[0]);
    let result = undefined;

    if (weather >= 26.00 && weather <= 35.00){
        result = "Hot";
    }else if(weather >= 20.1 && weather <= 25.9){
        result = "Warm";
    }else if(weather >= 15.00 && weather <= 20.0){
        result = "Mild";
    }else if(weather >= 12.00 && weather <= 14.9){
        result = "Cool";
    }else if(weather >= 5.00 && weather <= 11.9){
        result = "Cold";
    }else{
        result = "unknown"; 
    }

    console.log(result);
}

forecast(["8"]);