function calculateStatistics(input){
    let count = Number(input.shift());

    let hearthstoneCount = 0;
    let fortniteCount = 0;
    let overwatchCount = 0;
    let otherCount = 0;
    let totalGames = 0;

    for(let i = 0; i < count; i++){
        let gameName = input.shift();
        if(gameName === "Hearthstone"){
            hearthstoneCount++;
        } else if(gameName === "Fornite"){
            fortniteCount++;
        } else if(gameName === "Overwatch"){
            overwatchCount++;
        } else{
            otherCount++;
        }
        totalGames++;
    }

    console.log(`Hearthstone - ${(hearthstoneCount / totalGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fortniteCount / totalGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCount / totalGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(otherCount / totalGames * 100).toFixed(2)}%`);
} 
calculateStatistics(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);    