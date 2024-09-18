function  sort(first,second,third) {
    let mid = 0;
    let min = Math.min(first,second,third);
    let max = Math.max(first,second,third);

    if ((first > min && first < max) || (first === min && first !== max) || (first === max && first !== min)) {
        mid = first;
    } else if ((second > min && second < max) || (second === min && second !== max) || (second === max && second !== min)) {
        mid = second;
    } else {
        mid = third;
    }


   console.log(max);
   console.log(mid);
   console.log(min);
}

sort(-2,1,3);