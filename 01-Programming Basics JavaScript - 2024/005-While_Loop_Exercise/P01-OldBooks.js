function findTheBook(input){
    const targetBook = input[0];
    let index = 1;
    let checkedBooks = 0;
    while(true){
        let currentBook = input[index];
        if(currentBook === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBooks} books.`);
            break;
        }
        if(currentBook === targetBook){
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }
        checkedBooks++;
        index++;
    }
}    
    