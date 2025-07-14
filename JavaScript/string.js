const message = 'Hello'
const exrtamessage = '    Hi, I am Sachin     '
const finalmessage = exrtamessage.trim()
const uppermessage= message.toUpperCase()

const finalmessageLowercase = exrtamessage.trimStart().toLowerCase()
const lastFourDigit = '7898'
//lastFourDigit.padStart(16,'*')
//'************7898'

//Best Way to use Sting context
const templateString = `Last four digit of my account number is`

//templateString.concat(' ',lastFourDigit)
'************7898'
===>Methods(Without Argument)
1-toUpperCase()
2-toLowerCase()
3-trim()
4-trimStart()
5-trimEnd()
===>Methods(With Argument)
1-includes()
2-indexOf() // position of the string
3-replace()
4-replaceAll()
5-concat()
6-padStart()
7-padEnd()
8-charAt() // konsa character kis position pr h
9-charCodeAt()
10-split()

//===========================================

\'   '    single quote
\"   "    double quote
\\   \    Backslash

let str = "Hello JavaScript";
let res  = str.substring(0);
console.log(res);