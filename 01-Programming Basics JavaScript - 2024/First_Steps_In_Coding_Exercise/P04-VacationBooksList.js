function calculatePages(input){
    const pages = Number(input[0]);
    const pagesReadPerHour = Number(input[1]);
    const daysForBook = Number(input[2]);

    let result = (pages/pagesReadPerHour)/daysForBook;

    console.log(result);
}

calculatePages(["212 ","20 ","2 "]);