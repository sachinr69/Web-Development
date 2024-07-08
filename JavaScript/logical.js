const userAge = 21
const isCollegeStudent = (userAge >= 18) && (userAge <=20)
const isSchoolStudent = (userAge >= 18) && (userAge <= 21)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult1 = '' && 'Hello'
const orResult1 = '' && 'Hello'

const andResult2 = 'Hello' && null
const orResult2 = 'Hello' || null

const andResult3 = 'Hello' && -4+4
const orResult3 =  undefined || 4+8*5

const andResult4 = 'Hello' && console.log('hello1')
const orResult4 =  undefined && console.log('hello2')
