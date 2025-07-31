// debugger

// const username = 'Sachin'
// const userAgge = 20

// function add(){
//     const x = 5
//     const y = 8
//     console.log(x+y)
//     console.log(username)

//     function child(){
//         const childname = 'golu'
//         console.log(childname);
//     }

//     function grandchild(){
//         const grandchildchildname = 'dholu'
//         console.log(grandchildname);
//     }
//     grandchild()
    
// }

// child()

// add() 



// console.log('Program Ended');


//=============================================================//

//{} // the curly braces are scope , come with fxn and object then it called scope
// let a = 300;

// if(true){
//    let a = 10
//    const b=20
// }

// console.log(a);
// console.log(b);
// console.log(c);

//Nested  scope

function one(){
    const name= "SAchin"

    function two(){
        const website = "Youtube"
        console.log(name);
    }

    // console.log(website);

    two()
}

one()

if(true){
    const username = "SAchin"
    if(username==="hitesh"){
        const website = "Youtube"
        console.log(username + webite);
    }
}

// console.log(username);


