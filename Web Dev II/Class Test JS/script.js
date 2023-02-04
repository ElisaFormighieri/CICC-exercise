// Javascript Test

// 1 - What is ES6?
// Newer JavaScript version released in 2015

// 2- Name 3 examples of ES6 features which you learnt.
// Let and const as new variables; Arrow functions; Promises.

// 3- What is the difference between let and const?
// Let can be reassigned and const can’t.

// 4- How do you access object values? Give 3 examples
// object.key; object[‘key’];  const { key } = object.

// 5- What does setInterval and setTimeout do?
// setInterval executes a function every time that some defined time passes and setTimeout execute a function once after a defined time.

// What will be the output of the following ?

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

// Output:
// 5
// 5
// 5
// 5
// 5

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

// Output:
// 0
// 1
// 2
// 3
// 4

// 6- What are promises?
// Make possible to create asynchronous functions with JavaScript

// 7 - Convert this async function to async/await

getQuote()
  .then(quote => {
    console.log(quote)
  })
  .catch(function (err) {
    console.log(err)
  })
// after this line,
async function exercise() {
  try {
    const quote = await getQuote()
    console.log(quote)
  } catch (error) {
    console.log(error)
  }
}

// 8 - Convert this code to arrow function.

function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`
}
// after this line,
const greeting = (firstname, lastname) => `Hi, ${firstname} ${lastname}`

// 9 - Explain what a callback function is.
// A function that is passed as an argument to another function.

// 10 - What does the functions pop and push do to an array? And what do they return ?
// Pop removes the last element of the array, push add a new element to the end of the array.

// 11 - What is the expected answer to this code?

let string = ''
let object = { a: 1, b: 2, c: 3 }

for (let key in object) {
  string += object[key]
}

console.log(string)

// Output: 123

// 12 - What data type would Array.map() and Array.filter() return?
// Map returns a new copy of the array based on a callback function. Filter returns a shallow copy of the array based on a defined condition.
// Additionally what will be the output of this ?
let array = [1, 2, 3, 0, 4, 10, 0]
let output = array.filter(item => item)

// Output: [ 1, 2, 3, 4, 10 ]

// 13 - What data type would Array.includes() and Array.some() return?
// Includes search for a passed value in the array. Some verifies if a element in the array has some passed condition.

// 14 - Write down the 4 main methods of rest api
// get, post, put and delete.

// 15 - What is the difference between JSON and a JavaScript object?
// JSON is limited by double quotes and object keys must be strings., JavaScript can have single quotes. JavaScript objects can have functions, JSON can’t.

// 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.

// .then and catch

fetch('https://www.boredapi.com/api/activity')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })

// try and catch

try {
  const response = await fetch('https://www.boredapi.com/api/activity')
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = await response.json()
  console.log(data)
} catch (error) {
  console.error(error)
}
