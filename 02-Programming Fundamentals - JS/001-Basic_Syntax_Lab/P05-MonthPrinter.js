function solve(mounth) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if(mounth >= 1 && mounth <= 12){
        console.log(months[mounth-1]);
    } else{
        console.log("Error!");
    }
}

solve(1);
solve(9);
solve(12);
solve(13);