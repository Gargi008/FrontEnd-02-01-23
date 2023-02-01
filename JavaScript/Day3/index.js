/* string number boolean */
let myName="Gargi"
let myMarks= 90
let isPassed= true


/* NAN- not a number

NaN is a property of the global object
it is representing a value that is not a number
*/
let myNewName= isNaN("Asha") // Asha is not a number - true
let myNewMarks= isNaN(80) // 80 is not a number - false
console.log(" myNewName is it NaN ? ", myNewName)
console.log(" myNewMarks is it NaN ? ", myNewMarks)

console.log(isNaN(1))
console.log(isNaN(0))


let myTrueVal= isNaN(true) //1 is not a number - false
console.log("myTrueVal",myTrueVal)
let myFalseVal= isNaN(false) //0
console.log("myFalseVal",myFalseVal)
let myNullVal= isNaN(null) //0 
console.log("myNullVal",myNullVal)
let myUndefinedVal= isNaN(undefined) // true
console.log("myUndefinedVal",myUndefinedVal)


/* undefined - the varibale is declared but it has no value assigned to it */
let myAddress;
console.log("myAddress",myAddress)

/* null - it has the null value */

let myNewAddress= null;
console.log("myNewAddress",myNewAddress)

console.log("typeof(myName)",typeof(myName)) // string
console.log("typeof(myMarks)",typeof(myMarks)) // number 
console.log("typeof(isPassed)",typeof(isPassed)) // boolean
console.log("typeof(myAddress)",typeof(myAddress))//undefined
console.log("typeof(myNewAddress)",typeof(myNewAddress))//object


/* Arithmatic operators */
console.log(250+750) //250(operand +(operator) 750(operand)
console.log(1000-750)
console.log(45*56)
console.log(21/4)
console.log(21%5) // remainder

/* assignmet operator */ 
/* assigning the value to the left operand */
let myHome= "kolkata";
let myFood= "paneer";
let myScore= 120;
console.log(typeof('true'))

/* comparison operator */

/* == VS. === */
console.log(100 == 100) 
console.log(100 == '100') // number == string //100 == 100 /* checks only te values */
console.log(100 === '100') // number == string //100 == 100 /* it not only checks for the values but also checks fo rthe datatypes */
console.log("comparison-------")
console.log(100 == 100)
console.log(100 != 200) // not equal to (! Not)
console.log(200 >= 100)
console.log(50 <= 100)

/* logical operator */
console.log("AND")
console.log(0 && 0)
console.log(0 && 1)
console.log(1 && 0)
console.log(1 && 1)
/* && - and */
/* || - or  */

console.log("OR")
console.log(0 || 0)
console.log(0 || 1)
console.log(1 || 0)
console.log(1 || 1)

let A= 100;
let B= 200;
let C= 300;

console.log( A>B && B<0) /* 100>200 && 200<0 -----> false && false  - false*/
console.log(A<B && B>0) /* true && true -->  true*/ 
console.log(A<B && B<0) /* true && false -->  false*/ 


console.log( A>B || B<0) /* 100>200 || 200<0 -----> false || false  - false*/
console.log(A<B || B>0) /* true || true -->  true*/ 
console.log(A<B || B<0) /* true || false -->  true*/ 

/* prefix postfix */


let myNum= 5
//console.log(myNum++) /* postfix operator */
//console.log(++myNum)  /* prefix operator */
/* myNum= myNum+1 */
//console.log(myNum--) /* postfix operator */
//console.log(--myNum)  /* prefix operator */
/* myNum= myNum-1 */

/* console.log("postfix")
let myNewNum= myNum++ + 10  // 5 + 10
console.log("myNum",myNum)  // 5+1 //post operation
console.log("myNewNum",myNewNum) */

console.log("prefix")
let myNewNum= ++myNum + 10 // (5+1) + 10
console.log("myNum",myNum) // 6
console.log("myNewNum",myNewNum) // 16

/* let myFruits= 85
let myUpdatedFruits= myFruits++ + 5 // 85+5= 90
console.log(myFruits,myUpdatedFruits)//(85+1) // 86 */

/* let myFruits= 85
let myUpdatedFruits= ++myFruits + 5 // (85+1)=86 + 5
console.log(myFruits,myUpdatedFruits)// 91 */
/* let myFruits= 85
let myUpdatedFruits= myFruits-- + 5 // 85 + 5= 90
console.log(myFruits,myUpdatedFruits)// 85-1= 84 */
let myFruits= 85
let myUpdatedFruits= --myFruits + 5 // 85 -1=84 +5 = 89
console.log(myFruits,myUpdatedFruits)// 85-1= 84





