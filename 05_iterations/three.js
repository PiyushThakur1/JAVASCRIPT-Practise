// for of

// ['','','']
// [{},{},{}]

const arr = [1,2,3,4,5,6,7]
for (const num of arr) {
   // console.log(num);
    
}

const greetings = " Hello World!"

for (const greet of greetings) {
   //console.log(`each char :${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);


for (const [key,value] of map) {
   console.log(key, ':-', value);
       
}

const myobj = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myobj) {
//     console.log(key, ':-', value);
       
// }

