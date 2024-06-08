function Area(input){

    const[a,h] = input;

    let area = Number(a) * Number(h) / 2;

    console.log(area.toFixed(2))
}
Area(["20","30"]);