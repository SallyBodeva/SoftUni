function newHome(input) {
    const typeFlower = input[0];
    const countFlowers = Number(input[1]);
    const budget = Number(input[2]);
    let bill = 0;
    if(typeFlower === "Roses"){
        bill = countFlowers * 5;
        if(countFlowers > 80){
            bill *= 0.9;
        }
    } else if(typeFlower === "Dahlias"){
        bill = countFlowers * 3.8;
        if(countFlowers > 90){
            bill *= 0.85;
        }
    } else if(typeFlower === "Tulips"){
        bill = countFlowers * 2.8;
        if(countFlowers > 80){
            bill *= 0.85;
        }
    } else if(typeFlower === "Narcissus"){
        bill = countFlowers * 3;
        if(countFlowers < 120){
            bill *= 1.15;
        }
    } else if(typeFlower === "Gladiolus"){
        bill = countFlowers * 2.5;
        if(countFlowers < 80){
            bill *= 1.20;
        }
    }
     
    if(budget >= bill){
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${(budget - bill).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money, you need ${(bill-budget).toFixed(2)} leva more.`);
    }
}
newHome(["Tulips","88","260"]);    