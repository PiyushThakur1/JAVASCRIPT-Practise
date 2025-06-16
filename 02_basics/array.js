// Array

const newArray = [0,1,2,3,4,5,6]

const myarr = new Array(1,2,3,4)
// console.log(myarr[1]);


// Array Methods

// myarr.push(5,6,7)
// myarr.pop()

//myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newAr = myarr.join()

// console.log(newAr);
// console.log(typeof newAr);

// slice, splice

console.log("A", myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3)

console.log(myn2);
console.log("C", myarr);