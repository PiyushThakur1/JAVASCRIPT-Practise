// Primitive

// 7 types : String, Number , boolean, null, undefined, Symbol, 
// BigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemo = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =   876545678765678765678n


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes =["shaktiman", "nagraj", "doga"]
let obj = {
    name: "Piyush",
    age: 22
}

const myFunction = function(){
    console.log("Hello");
    
}

console.log(typeof id);



//++++++++++++++++++++++++++++++++  MEMORY  ++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myname = "Piyush"

let anothername = myname
anothername = "Anshu"

console.log(anothername)
console.log(myname)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);