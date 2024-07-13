const username = 'Ojas'
const userAge = 19

console.log(`Name: ${username}` )
console.log(`Age: ${userAge}`)

if(userAge >= 21 && userAge <=24){
    console.log(`${username} is a working professional`)
    }

else if(userAge >= 18 && userAge <=22){
    console.log(`${username} is a college student`)
    console.log('And he/she is learning computer science.')
    if(userAge >= 20){
        console.log('He is above 19')
    }else{
        console.log('He is a teen.');
        console.log(`${username} study in school.`)
        if(username.length > 5){
            console.log('Username length is greater then 5')
        }else{
            console.log('Username length is lesser than 5')
          }
        
    }
}