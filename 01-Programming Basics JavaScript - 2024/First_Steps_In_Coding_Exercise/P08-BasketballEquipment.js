function equip(input){
    const BASKETBALL_TAXES = Number(input[0]);

    let sneakersPrice = BASKETBALL_TAXES * 0.60;
    let sportWearPrice = sneakersPrice * 0.8;
    let ballPrice = sportWearPrice / 4;
    let accessories = ballPrice / 5;

    let result = BASKETBALL_TAXES + sneakersPrice + sportWearPrice + ballPrice + accessories;

    console.log(result);
}

equip(["365"]);