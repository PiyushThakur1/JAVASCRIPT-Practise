const myNumns = [1,2,3,4]

// const myTotal = myNumns.reduce(function (acc,curval) {
//     console.log(`acc: $${acc} and curval is ${curval}`);
    
//     return acc + curval
// },0)

const myTotal = myNumns.reduce( (acc, curval) => acc + curval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Web Dev Course",
        price: 4999
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(total);
