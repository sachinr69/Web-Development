function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

//current execution contest ko kisi or function ko pass kardeta h

function createUser(username, email, password){
    SetUsername.call(this, username) // called (to hold the reference)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);