// my age is 28
let myAge = 28 

// early years is the first two years of the dogs life 
let earlyYears = 2
// the first two years are equal to 10.5 years per year (total 21)
earlyYears = earlyYears * 10.5
// we are subtracting 2 years from my age because we already accounted for them with earlyYears later years are the years following hte first two years
let laterYears = myAge - 2

// calculates the number of dog years accounted by laterYears 
laterYears *= 4

console.log('early....', earlyYears)
console.log('later....', laterYears)

// my age in dog years is the value of early years and late years added
const myAgeInDogYears = earlyYears + laterYears

// my name 'Ryan Hardin' as a string is set to all lowercase letters with the string method toLowerCase
const myName = 'Ryan Hardin'.toLowerCase()
// console logged my name my age and my age in dog years using interpolation within a string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
