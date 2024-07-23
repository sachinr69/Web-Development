function introduceMe(username, profession, age){
    console.log('Hi, ');
    console.log(`My name is ${username || 'don'}.`);
    console.log(`I am ${profession}`);
    console.log(`My age is ${age} years old`);
    
    
}

//const returnValue = introduceMe()

introduceMe('OJAs','software developer',25)
introduceMe('Anurag', 'mechanical engineeer',24)

function addtwonumber(a, b){
    return a-b
}
const result = addtwonumber(10, 6)
console.log(result);