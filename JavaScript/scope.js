debugger

const username = 'Sachin'
const userAgge = 20

function add(){
    const x = 5
    const y = 8
    console.log(x+y)
    console.log(username)

    function child(){
        const childname = 'golu'
        console.log(childname);
    }

    function grandchild(){
        const grandchildchildname = 'dholu'
        console.log(grandchildname);
    }
    grandchild()
    
}

child()

add() 



console.log('Program Ended');