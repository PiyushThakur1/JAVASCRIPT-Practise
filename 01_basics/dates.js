let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleTimeString());

// let myCrtDate = new Date(2025,4,23)

// let myCrtDate = new Date(2025,4,23, 6 ,5)
//let myCrtDate = new Date("2025-04-23")

let myCrtDate = new Date("04-23-2025")

// console.log(myCrtDate.toDateString());
// console.log(myCrtDate.toLocaleString());

let myTimeStamp  = Date.now()

// console.log(myTimeStamp);
// console.log(myCrtDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());



// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    
})
