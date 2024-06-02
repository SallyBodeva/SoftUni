function Data(input){
    const [firstName, lastName, age, city] = input;

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`)
}

Data(["Sally","Bodeva","18","Velingrad"])