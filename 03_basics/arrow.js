const user = {
    name: "Anshu",
    price: 9999,

    welcomMessage: function () {
        console.log(`${this.name} Welcome to the website`)
        // console.log(this);
    
    }

}

// user.welcomMessage()
// user.name = "Piyush"
// user.welcomMessage()

// console.log(this);

// function chai(){
//     let username = "Anshu"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "Anshu"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "Anshu"
    console.log(this);
}


// chai()

// const add2 = (n1, n2) =>{
//     return n1 + n2 // expicit return
// }

///++++ implicit return

// const add2 = (n1, n2) => n1 + n2

// const add2 = (n1, n2) => (n1 + n2) 

const add2 = (n1, n2) => ({name: "Piyush"})


console.log(add2(2,3));


