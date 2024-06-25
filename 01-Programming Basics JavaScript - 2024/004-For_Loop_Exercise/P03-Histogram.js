function solve(input){
    let n = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;


    for(let i = 1; i <= n; i++){
        if(Number(input[i] < 200)){
            p1Count++;
        } else if(Number(input[i]) <= 399){
            p2Count++;
        } else if(Number(input[i]) <= 599){
            p3Count++;
        } else if(Number(input[i]) <= 799){
            p4Count++;
        } else{
            p5Count++;
        }
    }

    let p1Percentage = (p1Count / n) * 100;
    let p2Percentage = (p2Count / n) * 100;
    let p3Percentage = (p3Count / n) * 100;
    let p4Percentage = (p4Count / n) * 100;
    let p5Percentage = (p5Count / n) * 100;

    console.log(p1Percentage.toFixed(2) + "%");
    console.log(p2Percentage.toFixed(2) + "%");
    console.log(p3Percentage.toFixed(2) + "%");
    console.log(p4Percentage.toFixed(2) + "%");
    console.log(p5Percentage.toFixed(2) + "%");
}

solve(["7","800","801","250","199","399","599","799"]);     