function Area(input){
    const[a,b,h]=input;

    const area = ( Number(a) + Number(b) ) * Number(h) / 2;

    console.log(area.toFixed(2));
}

Area(["8","13","7"]);