/* assignment discussions


question 5 needs to be discussed .... 
question 3 



:)

any other one?

okayyy --- 




*/

/* // Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354 */

const totalUnits= 300
/* const totalUnits= parseFlat(prompt("Enter the total unit")) */
let bill;
if(totalUnits <=50){
    bill= totalUnits * 0.5
}else if( totalUnits > 50 && totalUnits <= 150){ // 120 // 50 * 0.5 + (120-50)*0.75
    bill = (50 * 0.5 ) + (totalUnits- 50) * 0.75

}else if ( totalUnits > 150 && totalUnits <= 250){
    bill = (50 * 0.5) + (100 * 0.75) + (totalUnits - 150) * 1.2;
}else{
    bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + (totalUnits - 250) * 1.5;
    bill += bill * 0.2;

}

console.log("bill", bill)

/* calculor */

const num1= 45
const num2= 34
const operator= '+'
/* const num1= parseInt(prompt("Enter no 1"))
const num2= parseFloat(prompt("Enter no 2"))
const operator= prompt ("Enter the operator + , - , * , /") */
let result;

switch(operator){
    case '+':
        result= num1+ num2;
        console.log("output----", result)
        break;
     
      
    case '-':
        result= num1- num2;
        console.log("output----", result)
        break;
       
    case '*':
        result= num1* num2;
        console.log("output----", result)
        break;
       
    case '/':
        result= num1/ num2;
        console.log("output----", result)
        break;
  

    default:
         console.log(" enter a valid operator")
         break;
   
        
}


const number = '45.3aaaaaaa'//string

/* parseInt / parseFloat   string --> number 
  pareseInt ---- '45.3'  --> 45
  pareseFloat ---- '45.3'  --> 45.3

*/
const intVal = parseFloat(number)
console.log("intVal", intVal, typeof(intVal)) // number 


/* Array   */
/* data structure */
const myCar1= "Audi"
const myCar2= "Rolls-Royce"
const myCar3= "BMW"
const myCar4= "Thar"
const myCar5= "Maruthi800"
const myCar6 = "porsche"
const myCar7= "skoda"


console.log(myCar1)
console.log(myCar7)

const myCars = ['Audi', "Rolls-Royce", "BMW", "Thar", "Maruthi800", "porsche", "Skoda"] // []

console.log(myCars)

/* const myCar = [] //empty array */

const myBikes= ['Honda', 'Yamaha', 'ducati', 1, 2,3, true, false,['hola', 'bye', 1]]  // 
console.log("myBikes", myBikes)

console.log(myBikes.length)

/* const myCycle = ['hero', 'Hercules', 'ladybird'] */

const myCycle= new Array('hero', 'Hercules', 'ladybird') //splice(0,1) //delete 
// 'Hercules', 'ladybird'
console.log("myCycle",myCycle)



console.log(myCycle[0])
console.log(myCycle[1])
console.log(myCycle[2])
console.log("myCycle last element",myCycle[myCycle.length-1]) // myCycle.length --> 3 - 1 = 2
console.log(myCycle.slice(0,1)) // 


/* const newCycle= myCycle.slice(0,1) // returns a new array
console.log("newCycle",newCycle) */




//hero', 'Hercules', 'ladybird'
/* console.log("myCycle before",myCycle)
const newCycle= myCycle.splice(0,1) // overwrites the existing /original array
console.log("newCycle",newCycle)
console.log("myCycle after",myCycle)
//Hercules', 'ladybird'
console.log(myCycle.splice(1,1)) */
console.log(myCycle.splice(0,3,'hero1','hero2')) //position // no of elements u wanna delete
console.log("myCycle new",myCycle)




/* console.log("newCycle",newCycle) */

/* console.log(myBikes.splice(5,2)) // 
console.log(myCycle.splice(0,1)) // starting index , how many elements */













