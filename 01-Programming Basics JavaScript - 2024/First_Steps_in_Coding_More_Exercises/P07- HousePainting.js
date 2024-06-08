function paint(input){
    const GREEN_PAINT_COVERAGE = 3.4;
    const RED_PAINT_COVERAGE = 4.3;
    const [DOOR_HEIGHT, DOOR_WIDTH] = [2, 1.2]
    const [WINDOW_HEIGHT, WINDOW_WIDTH] = [1.5, 1.5]
    
    const height = Number(input[0]);
    const length = Number(input[1]);
    const heightRoof = Number(input[2]);

    let frontAndBackWallArea = 2 * height * height - DOOR_HEIGHT * DOOR_WIDTH;
    let sideWallsArea = 2 * height * length - 2 * WINDOW_HEIGHT * WINDOW_WIDTH;
    let roofSideWallsArea = 2 * height * length;
    let roofFrontTriangles = 2 * (height * heightRoof / 2);

    const greenPaintNeededInLiters = (frontAndBackWallArea + sideWallsArea) / GREEN_PAINT_COVERAGE;
    const redPaintNeededInLiters = (roofFrontTriangles + roofSideWallsArea) /RED_PAINT_COVERAGE;

    console.log(greenPaintNeededInLiters.toFixed(2));
    console.log(redPaintNeededInLiters.toFixed(2));
}

paint(["6","10","5.2"]);