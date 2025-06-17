// var c = 30

let a =300
if (true) {
    let a =10
    const b = 20
    // console.log(a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//Nested scope

function one(){
    const name = "Piyush"
    function two(){
        const middleName = "Singh"
        // console.log(name);
    }
    // console.log(middleName);
    two()
}

one()

if(true){
    const name = "piyush"
    if (name === "piyush") {
        const  website  = " youtube"
        // console.log(name + website);
        
    }
    // console.log(website);    
}

// console.log(name);


//+++++++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addOne(5))

function addOne(n){
    return n + 1
}



const add2 = addtwo = function(n){
    return n + 2
}

add2(4)