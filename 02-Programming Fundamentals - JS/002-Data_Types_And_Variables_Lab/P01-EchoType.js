function print(arg) {
   
    let result = "";
    if(typeof(arg) === "number" || typeof(arg) === "string"){
        result = arg;
    }else{
        result = 'Parameter is not suitable for printing';
    }  
    console.log(typeof(arg));
    console.log(result);
}

print(null);