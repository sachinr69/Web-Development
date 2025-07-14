const myName = 'Sachin'

const userName1=''
const usernName2=''


const user1 = {
    firstName: 'Sachin'
}
// const user2 = {
//     firstName: 'Ojas',
//     lastName: 'Agarwal',
//     Sachin: 'Developer'
// }

// console.log(user2.lastName);
// console.log(user2["firstName"]);
// console.log(user2[myName]);

const user2 = {
    firstName: 'Rahul',
    lastName: 'Agarwal',
    address:{
        city: 'Banglore',
        pincode: '48454',
        state: 'Karnataka',
        moredetails:{
            population: '100million',
            area: '4000 sqkm',
            
        }
    }
}

//acess 
console.log(user2.pincode)
console.log(user2["lastName"]);

//Symbol Key

const sym = Symbol("YOYO")

const Juser = {
    [sym]: "MYKEY";
}

console.log(Juser[sym])

//Reference Object

user2.greeting = function(){
    console.log("Hello");
}

user2.greeting2 = function(){
    console.log(`Hello , ${this.population}`);
}

console.log(user2.greeting2());

// Assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true