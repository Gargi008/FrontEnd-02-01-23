let myName= "vipin"
let mySurName= "thakur"

let myWords= `I'm ${myName} ${mySurName} and I scored ${80+20}` 
//console.log("Vipin's word----",myWords)


/* if-else */
/* switch */


/* let weekday= "alienday"
if(weekday=="monday"){
    console.log("its day 1 alll")
}else if (weekday=="tuesday"){
    console.log("its day 2 alll")
}else if (weekday == "wednesday"){
    console.log("its day 3 alll")
}else if( weekday == "thursday"){
    console.log("its day 4 alll")
}else if( weekday == "friday"){
    console.log("its day 5 alll")
}else if(weekday == "saturday" || weekday == "sunday"){
    console.log("yaay Holiday :)")
}else{
    console.log("default value")
}
 */


/* switch */

/* let weekday = prompt("pls enter a weekday") */
let weekday="sunday"

switch(weekday){
    case "monday":
        console.log("its day 1 alll")
        break;
    case "tuesday":
        console.log("its day 2 alll")
        break;
    case "wednesday":
        console.log("its day 3 alll")
        break;
    case "thursday":
        console.log("its day 4 alll")
        break;
    case "friday":
        console.log("its day 5 alll")
        break;
    case "saturday":
    case "sunday":
        console.log("itsss holidayyy")
        break;
    default:
        console.log("pls check what value u have entered")
}

/* let Arthy = prompt("hey Arthy pls enter your details") */
/* prompt is not part of js, prompt is part of BOM , run this code from browser  */


/* ternary operator */
/*(condition)? () : ()

() ? () : ()

if(constion){

}else{

} */

let marks= 30
let passingMark= 35

/* if(marks>= passingMark){
    console.log("passed")
}else{
    console.log("failed")
} */

const result = (marks>= passingMark) ? ("passed") : ("failed")
console.log("result",result)



/* coercion */

/* Implicit coercion and explicit coercion */


/* Implicit coercion  - type conversion done by js , automatically :)*/
let x= 5;
console.log(x,typeof(x))

x=x+'a'; //5 + 'a' //5a // string
console.log(x,typeof(x))
x=x-'a'; //5 - 'a' //NaN // number
console.log(x,typeof(x))

console.log(`5+'5' is ${5+'5'} and type is ${typeof(5+'5')}`) /* number got converted into a string */

console.log(`5-'5' is ${5-'5'} and type is ${typeof(5-'5')}`) /* //0 // bug // string got converted into a number*/
console.log(`5*'5' is ${5*'5'} and type is ${typeof(5*'5')}`) // string got converted into a number

/* type conversion

string -> number
number -> string

*/

/* explicit coercion - developers r doing the type conversion

*/

const myNum= Number('5')
console.log(myNum,typeof(myNum))
const myStr= String(5)
console.log(myStr,typeof(myStr))

let n1= '5'
let n2= 5
//const n3= n1+n2 //implicit coercion
const n3= Number(n1)+Number(n2) //explicit coercion

console.log(n3)
/* falsy - 0, "", undefined , null, NaN */
/* truthy - anything that is not falsy */
console.log(Boolean('g')) // t
console.log(Boolean(1)) // t
console.log(Boolean('false')) // t
console.log(Boolean(true)) // t


//imp 

console.log(String((10-true)),typeof(String((10-true)))) //10 -1



console.log(Boolean(true)== true) // true== true // true
console.log(Boolean(false)== true) // false == true //false
console.log("hello",Boolean(false)) //false //0

console.log(Number(undefined)) //NaN
console.log(Number(null)) //0
console.log(Number('a')) //NaN
console.log(Number('2a')) //NaN
console.log(parseInt('2a2')) //2





