function AddTime(input) {
  
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if(minutes>=60){
        minutes = minutes - 60;
        hour++;
    }
    if(hour === 24){
        hour -= 24;
    }
    
   if(minutes<10){
        console.log(`${hour}:0${minutes}`);
    } else{
        console.log(`${hour}:${minutes}`);
    }
}

AddTime(["23", "59"]);