const username = 'Sachin'
const userAge = parseInt(prompt('Please Enter YOur Age.'))

console.log(`Name: ${username}` )
console.log(`Age: ${userAge}`)

if(userAge >= 20 && userAge <=24){
    console.log('User is a working professional')
    }
else if(userAge >= 14 && userAge <=21){
    console.log('User is a learner')
}
else if(userAge <= 0){
    console.log('Please Enter the Valid Age.')
}
else{
    console.log('Program Failed')
}
