/* string operators */

let myName= "Gargi"
let mySurName= "Chakraborty"

/* ES6 / EcmaScript 2015 */

/* template literals */

/* let myWords= "I'm "+ myName + " " + "and my Surname is " + mySurName */
let devendra= `hii Lokesh , I'm ${myName} and I scored ${90}`
/* My marks is 90 */
let myMarks=`My marks is ${100-10}`
console.log(myMarks)

/* 
1. take backticks
2. take ${ any js }

*/
console.log(devendra)




console.log(myName.length)//length is a property of String
console.log(mySurName.length)//length is a property of String

let a=100
let b=200
let c=300

/* let d= a+b+c */
let d= 'aaa'+ " "+ 'b'+'c' //string concatenation 
console.log(d)
console.log("My "+ "name " + " " + "is Gargi")


//string methods
let myAddress= "Kolkata"
console.log("myAddress.length",myAddress.length)
console.log("uppercase",myAddress.toUpperCase())
console.log("lowercase",myAddress.toLowerCase())

//slice
//we are extracting a part of a string
//slice(starting position, ending position)

let mySlicedAdrress= myAddress.slice(4,7)// 0 ,3-1 , 0 to 2
console.log("mySlicedAdrress",mySlicedAdrress)


let mySubString= "kol"

let mynewAddress= myAddress.toUpperCase() //KOLKATA
let mynewSubString= mySubString.toUpperCase() //KOL
console.log(mynewAddress.includes(mynewSubString))

console.log('Gargi'.charAt(10))
let val='Gargi'.charAt(10)
console.log(typeof(val))


/* control flow


if-else


*/

let weatherUpdate="sunny";

/* if(weatherUpdate.includes("raining")){
    console.log("huraaahhhhh, m not going to school")
}else{
    console.log("ughhhh , I need to go to school :(")
} */
if(3-3){
    console.log("huraaahhhhh, m not going to school")
}else{
    console.log("ughhhh , I need to go to school :(")
}


/* 

truthy - 1

falsy - 0 , "", undefined, null , NaN

*/


/* if(condition){ // true
     //if true then the content inside the if block gets executed
}else{
    //if false then the content inside the else block gets executed
}
 */


/* wap to check whether a number is a positive or a negative number */
let myNum=-11
if(myNum>0){
    console.log(myNum + " is a positive no")
}else if(myNum===0){
    console.log(" it is zero")
}
else{
    console.log(myNum + " is a negative no")
}








