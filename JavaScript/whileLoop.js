console.log('Program Started');


// let i =1

// while(i<=100){
//     console.log(i);
//     i++
// }

const arr = ['Sachin', 'rahul', 'vansh', 'adarsh', 'ojas']

let i = 0

while(i < arr.length){
    console.log(`${i+1}. ${arr[i]}`)
    arr[i] = arr[i] + 'kumar'
    i++
}
// 1. Sachin
// 2. rahul
// 3. vansh
// 4. adarsh
// 5. ojas

// ====================For in loop ===================

const object = {
    js: "JavaScript",
    cpp: "C++",
    rb : "Ruby"
}

for(const key in object){
    console.log(object[key]);
}