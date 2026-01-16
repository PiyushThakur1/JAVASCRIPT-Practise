let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let prop in user) {
  // prop
  console.log( user[prop] ); 
}   