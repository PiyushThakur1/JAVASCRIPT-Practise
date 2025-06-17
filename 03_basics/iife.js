// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //name iife
    console.log('DB_Connected');
})();

( (name) => {
    console.log(`DB_Connected 2 ${name}` );
    
})("Anshu");