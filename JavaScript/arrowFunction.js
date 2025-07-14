const user = {
    username: "hitesh",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`) //this keyword work as current context
        //   console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

console.log(this); // o/p ----> {}

function yo(){
    let username = "SAchin"
    console.log(this.username); //  undefined
}

yo()

// fat arrow function

// const yo = () => {
//     let username = "sachin"
//     console.log(this.username); 
// }

// yo()

//=======================================

const add = (n1, n2) => {
    return n1+n2
}
      //Or

const addTwo = (n1,n2) => (n1+n2) // implicitly

const addthree = (n1 , n2, n3) => ({username: "sachin"})

console.log(add(3,4))