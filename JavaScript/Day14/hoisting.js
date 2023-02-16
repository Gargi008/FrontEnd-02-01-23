/* let and const  */
/* var x;
console.log(x);//undefined
x=11;
console.log(x);//11 */

console.log(x) /* ReferenceError: x is not defined */
var x= 11



//const x= 11; /* if let or const used - ReferenceError: Cannot access 'x' before initialization */
console.log(x) 

const result= multiply(77,9)
console.log(result)
//function declaration - u are able to access the function before initialization
/* function multiply (a,b){
    return a*b;
} */
/* const multiply= function (a,b){ 
    return a*b
} */
let multiply= (a,b)=>a*b  /* ReferenceError: Cannot access 'multiply' before initialization */
