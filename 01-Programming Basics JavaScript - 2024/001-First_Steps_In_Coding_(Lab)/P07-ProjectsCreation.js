function Creation(input){
    const HOURS_FOR_PROJECT =3;

    let name = input[0];
    let projects = Number(input[1]);

    console.log(`The architect ${name} will need ${projects*HOURS_FOR_PROJECT} hours to complete ${projects} project/s.`);
}

Creation(["Peter","5"]);