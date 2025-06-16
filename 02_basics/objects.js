// singleton --
// Object.create

//object literals

const mySim = Symbol("key1")

const user = {
    "name": "Piyush",
    age: 19,
    location: "Jammu",
    email: "piyush@gmail.com",
    [mySim]: "mykey1",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Wednesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["name"]);
// console.log(user[mySim]);

user.email = "piyush.gogle.com"
// Object.freeze(user)
user.email = "piyush.goglsde.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello User");
    
}

user.greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
    
}

console.log(user.greeting());

console.log(user.greeting2());
