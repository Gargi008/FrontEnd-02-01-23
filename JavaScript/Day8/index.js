/* Expression vs statement */

console.log( 100 + 100)

/* expression - that can produce a value
   statement - that can not produce a value

*/

22* 78 // expression

if( 100 > 50){
    console.log("heyaaaa guys")
    const newVar= 23+ 89 
}// statement


//functions - a piece of code that we can reuse

console.log("hello")
console.log("hola")
console.log("halo")
//------
console.log("hello")
console.log("hola")
console.log("halo")
console.log("hello")
console.log("hola")
console.log("halo")


const n1= 333
const n2= 666
const x1= n1 * n2

const n3= 3333
const n4= 6665
const x2= n3 * n4


/* DRY - Do not repeat  */
/* 
1. declare the function
2. call the function


*/

console.log("saying helloossss from function")
function sayingHello(){ // function declaring
    console.log("hello")
    console.log("hola")
    console.log("halo")
}

sayingHello()
sayingHello()
sayingHello()

/* //declared
function myChocolates(amul , bournvile, dairymilk){ //amul = 5 ,bournvile=6
    const choco= `I have ${amul + bournvile + dairymilk} chocolates` // 5+6 = 11
    console.log(choco)
    return 1;
}
//calling
//tomorrow
//X 
myChocolates(5,6,7)
//Y
const Christy = myChocolates(10,5,6)
console.log(Christy)
const Lokesh = myChocolates(15,8,6)
console.log(Lokesh) */

//declared
function myChocolates(name,amul ,bournvile, dairymilk){ //amul = 5 ,bournvile=6
    const choco= `${name} has ${amul + bournvile + dairymilk} chocolates` // 5+6 = 11
 /*    console.log(choco) */
    return choco;
}
//calling
//tomorrow
//X 
const x=myChocolates('Christy',15,6,7)
console.log(x)
myChocolates('Lokesh',5,6,7)
myChocolates('Himanshu',15,16,7)
myChocolates('Sai',52,6,7)
myChocolates('Sanjay',50,6,7)
myChocolates('Devendra',1,1,1)

/* Function Declaration
   Function Expression
   Arrow Function
*/

/* function nameofthefunction(){
    
    
}
 */
/* function ageCalculator(name,birthYear){
    console.log(`${name} was born in ${birthYear}`)
    return 2023- birthYear
}
const tom=ageCalculator("Tom", 2000)
console.log(`Tom is ${tom} years old`)
const jerry=ageCalculator("Jerry", 2003)
console.log(`Jerry is ${jerry} years old`) */



/*  in case of function declaration u can call the function before declaration */
/* const tom=ageCalculator("Tom", 2000)
console.log(`Tom is ${tom} years old`)
const jerry=ageCalculator("Jerry", 2003)
console.log(`Jerry is ${jerry} years old`)

function ageCalculator(name,birthYear){
    console.log(`${name} was born in ${birthYear}`)
    return 2023- birthYear
} */






/* function expression-------- */
/*  in case of funcrion expression u can't call the function before declaration */
/* const ageCalculatorExpression = function (name, birthYear){
    console.log(`${name} was born in ${birthYear}`)
    return 2023- birthYear

}
const tom=ageCalculatorExpression("Tom", 2000)
console.log(`Tom is ${tom} years old`)
const jerry=ageCalculatorExpression("Jerry", 2003)
console.log(`Jerry is ${jerry} years old`) */

/*  this was introduced in ES6 or ecmascript 2015  */
/* Arrow function */ /* fat arrow function */

/* ()=>{

} */

/* const ageCalculatorArrow = (name, birthYear)=>{
    console.log(`${name} was born in ${birthYear}`)
    return 2023- birthYear
}
const tom=ageCalculatorArrow("Tom", 2000)
console.log(`Tom is ${tom} years old`)
const jerry=ageCalculatorArrow("Jerry", 2003)
console.log(`Jerry is ${jerry} years old`) */
const ageCalculatorArrow = birthYear=>2023- birthYear
const tom=ageCalculatorArrow(2000)
console.log(`Tom's age - ${tom}`)
const jerry=ageCalculatorArrow(2003)
console.log(` Jerry's age - ${jerry} `)

/* const funcName=()=>{

} */
/* const funcName1= function (){
    

}
function funcNam2(){

} */

const Sai ={
    fname: "Sai",
    lname: "Kumar",
    state: "Telengana",
    calculateAge: function (bYear){
        return 2023 - bYear
    }

}

console.log("Sai",Sai)
console.log("fname",Sai.fname) //dot notation
console.log("fname",Sai["fname"]) //bracket 

//method

console.log("Age",Sai.calculateAge(1600))
console.log("Age",Sai["calculateAge"](1600))


