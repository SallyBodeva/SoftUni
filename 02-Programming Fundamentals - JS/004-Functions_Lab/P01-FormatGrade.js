function guessGrade(grade) {
    if(grade >= 5.50){
        console.log(`Excellent (${grade.toFixed(2)})`);
    } else if(grade >= 4.5){
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if(grade >= 4.5){
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if(grade >= 3.5){
        console.log(`Good (${grade.toFixed(2)})`);
    }else if(grade >= 3.0){
        console.log(`Poor (${grade.toFixed(2)})`);
    } else{
        console.log(`Fail (2)`);
    }
}

guessGrade(3.33);	
guessGrade(4.50);
guessGrade(2.99);	
