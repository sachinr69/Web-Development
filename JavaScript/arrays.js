const { useCallback } = require("react")

const username = 'Sachin kumar'

const fruitsCollection = [
  'apple',
  'banana',
  'grapes',
  'mango',
  { name: 'SAchin', as: { age: 20 } },
]

const rainbow = ['violet', 'iodine', 'blue', 'green', 'yellow', 'orange', 'red']
const animals = ['dog', 'cat', 'rat']

//BASIC ARRAY METHODS.........

//ex-fruitCollection.push('sitafal')
//this 'push' function help to push the length of array and add in array.
//WE also put more than 1 value
//after compile it gives the length of array.
//'push'-----> add elements in array from last

//.pop -----> is used to remove elements in array from last.

//.shift ---> remove elements  from 0 index.

//.unshift----> Add elements in array from 0 index.

//.concat ----> it helps to add array into another array.

//.indexOf-----> it returns first index of an array. Syntax = indexOf(searchElement, fromIndex)

//.includes----> it helps to know that element is exist in array.

//.reverse------> it reverse the array.

//.sort ------> it sort an array by their alphabetically  or numerically.

//.slice------> it gives a part of elements by creating new array.

//.splice-----> it delete and also add particular element from the  index.

// person.at(-1) => person[arr.length-1]

//     INTERVIEW QUES--> what is differnce b/w slice & splice.

const nameAndNumberList = [
  ['sachin', 1],
  ['adrash', 2],
]

const ticktacktoe = [
  ['X', ' ', ' '],
  [' ', ' ', 'O'],
  ['O', ' ', 'X'],
]

//  differnece forEach vs Map

Array.forEach(funnction
  callback(currentValue, indexedDB, array){
    //logic
  }, thisvalue);

array.map((currentValue, index, array) => {
  //logic
}, thisValue);

const num = [1,2,3,4,5];

num.forEach((curElem)=> {
  console.log(curElem * 2)
})

//is , from , of