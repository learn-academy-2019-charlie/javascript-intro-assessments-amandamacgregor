// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

console.log("Problem 1: Write the code that returns 'B' from mantra.")
console.log(mantra.charAt(0))

// 2. Write the code that determines if there is a 'x' in mantra.

console.log("Problem 2: Write the code that determines if there is a 'x' in mantra.")
console.log(mantra.includes("x"))

// 3. Write the code that determines if there is a 'v' in mantra.

console.log("Problem 3a: Write the code that determines if there is a 'v' in mantra.")
console.log(mantra.includes("v"))

// Stretch: Write the code that returns the position of 'v' in mantra.

console.log("Problem 3b: Write the code that returns the position of 'v' in mantra.")
console.log(mantra.search("v"))

// Consider the following statement:

console.log("Problem 4: Update the codingIsEasy and imBored variables above the statement to the values required to log I need more!")
var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log 
//"I need more!"



// Consider the following statement:

console.log("Problem 5: Update the imLost and imFrustated variables above the statement to the values required to log Keep Coding!")
var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required
//to log "Keep coding!"


// 6a. Recall the mantra variable from the first question. 
//Write the code that logs each letter of mantra using a for loop.

console.log("Problem 6a: Write the code that logs each letter of mantra using a for loop.")
for(i = 0; i < mantra.length; i++){
    console.log(mantra.charAt(i))
}

// Stretch: Using a while loop.

console.log("Problem 6b: Using a while loop.")
var i = 0
while(i < mantra.length) {
    console.log(mantra.charAt(i))
    i++
}


// Super Stretch: Using forEach().

console.log("Problem 6c: Using forEach()")
var arr = mantra.split("");
arr.forEach(element => {
  console.log(element);
});


// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

console.log("Problem 7a: Write a function that takes a string like message as an argument and returns the string without vowels.")

const remVowels1 = (msg) => {
    return msg.replace(/[aeiou]/ig,'')
}
console.log(remVowels1(message))

// Stretch: Update your function to throw an exception if the argument is not a string.

console.log("Problem 7b: Update your function to throw an exception if the argument is not a string.")

const remVowels2 = (msg) => {
    if(typeof msg === "string") {
        return msg.replace(/[aeiou]/ig,'')
    }  else {
        return `${msg} is not a string.  Please enter a string.`
    }  
}
console.log(remVowels2(123))

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
//AM NOTES: exception vs. TypeError??

console.log("Problem 7c: Update your function to throw a TypeError if the argument is not a string.")

var error = new Error("Not a string")
error.code = "STR"
const remVowels3 = (msg) => {
    if(typeof msg === "string") {
        return msg.replace(/[aeiou]/ig,'')
    }  else {
        return error
    }  
}
console.log(remVowels3(123))

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
console.log("Problem 8:")


const toon = (arr) => {
    var newArr = []
    for(i = 0; i< arr.length; i++) {
        if(arr[i].animal === 'cat')
        newArr.push(arr[i])
    }
    return newArr
}
console.log(toon(toonimals))
