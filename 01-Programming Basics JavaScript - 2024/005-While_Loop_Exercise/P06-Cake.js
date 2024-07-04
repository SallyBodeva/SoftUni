function cakePieces(input) {
    let pieces = Number(input.shift()) * Number(input.shift());

    while(true){
        let command = input.shift();
        if(command === "STOP"){
            console.log(`${pieces} pieces are left.`);
            break;
        }
        if(pieces - Number(command) > 0){
            pieces -= Number(command);
        }else{
            console.log(`No more cake left! You need ${Number(command) - pieces} pieces more.`);
            break;
        }
    }
}
cakePieces(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);
      