function harvest(input) {
    const fieldArea = Number(input[0]);
    const grapesPerSquareMeter = Number(input[1]);
    const leterWineNeeded = Number(input[2]);
    const workersCount = Number(input[3]);

    let grape = fieldArea * grapesPerSquareMeter;
    let producedWine = (grape * 0.40) / 2.5;
    if(producedWine >= leterWineNeeded){
        console.log(`Good harvest this year! Total wine: ${producedWine} liters.`);
        console.log(`${Math.ceil(producedWine - leterWineNeeded)} liters left -> ${Math.ceil((producedWine - leterWineNeeded) /workersCount)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(leterWineNeeded - producedWine)} liters wine needed.`);
    }
}

 harvest(["1020", "1.5", "425","4"]);