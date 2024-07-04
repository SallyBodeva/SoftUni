function getGrates(input){
    const unpleasantGradesCount = Number(input.shift());

    let problems = 0;
    let sumGrades = 0;
    let countGrades = 0;
    let studentUnpleasantGrades = 0;
    let lastProble = undefined;

    while(true){
        let command = input.shift();
        if(command === "Enough"){
            break;
        }
        let grade = Number(input.shift());
        if(grade <= 4){
            studentUnpleasantGrades +=1;
            if(studentUnpleasantGrades === unpleasantGradesCount){
                console.log(`You need a break, ${studentUnpleasantGrades} poor grades.`);
                break;
            }
        }
        problems++;
        countGrades++;
        sumGrades += grade;
        lastProble = command;
    }
   if(studentUnpleasantGrades != unpleasantGradesCount){
    console.log(`Average score: ${(sumGrades / countGrades).toFixed(2)}`);
    console.log(`Number of problems: ${problems}`);
    console.log(`Last problem: ${lastProble}`);
   }
}

getGrates(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);    