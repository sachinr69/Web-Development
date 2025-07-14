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

//========================================//
function cal(n1, n2, op){
    let res;
    switch(op){
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case"/" :
            return n1%n2;
        default:
            return "None";

    }
}

console.log(cal(5, 2, "+"));

//-============================================//

const arr = [2,3,4,5]

function returnFirstValue(getArr){
    return getArr[2]
}
console.log(returnFirstValue(arr));