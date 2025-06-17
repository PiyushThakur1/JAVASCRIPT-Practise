// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
    // console.log("5 is best");

    }
    // console.log(element);
     
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
}
}

let myarr = ["f","s","i"]

for (let i = 0; i < myarr.length; i++) {
    const e = myarr[i]
    // console.log(e);
}


// break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}