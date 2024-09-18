function getNextDay(year, month,day){

    let date = new Date(year, month - 1, day);
    
    date.setDate(date.getDate() + 1);
    
    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth() + 1; 
    let nextDay = date.getDate();
    

    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
    
}

getNextDay(1016,12,31);