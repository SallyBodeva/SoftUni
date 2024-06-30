function readNames(input){
    while(true){
        let name = input.shift();

        if(name === "Stop"){
            break;
        }
        console.log(name);
    }
}