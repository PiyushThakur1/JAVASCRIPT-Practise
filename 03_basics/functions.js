function myName(){
    console.log("Piyush");
    console.log("Singh");
    
}

// myName()

// function addTwoNumbers(n1,n2){
//     console.log(n1 + n2);
// }

function addTwoNumbers(n1,n2){
    // let res = n1 +n2
    return n1+ n2
}

const res = addTwoNumbers(5, 6)

// console.log(res);

function logIn(username = "Sam"){
    if(!username){
        console.log("Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(logIn())


function calculateCartPrice(val1, ...num1){//rest operator
    return num1
}

// console.log(calculateCartPrice(300,100,200));

const user = {
    username: "Piyush",
    price: 299
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}

// handleObj(user)
handleObj({
    username: "Piyush",
    price: 299
})

const mynewArray = [200,300,400]

function return2ndValue(gtArr){
    return gtArr[1]
}
// console.log(return2ndValue(mynewArray))

console.log(return2ndValue([22,3,4]))
