//OOP = Object Oriented Programming

//prototype - prototypes are template objects
//js is a prototype based oop language
//js is not class based oop language


/* console.log("let's begin")
String.prototype.sing = function (){
    return "yaayyy let's start singing !!"
}
String.prototype.dance = function (){
    return "yaayyy let's start dancing !!"
}

console.log("Gargi".toUpperCase()) //GARGI //kupdeep - KULDEEP
console.log("Sai".sing())
console.log("Vipin".dance())
console.log("string".dance())
console.log("Pavan".dance())

//new method

Array.prototype.newMethod= function(){
    return "huhuhahaha I am new in the town !!!"
}
Array.prototype.pop= function(){
    return "sryy can't delete now , not in the mood  !!!"
}

const arr= [5,6,7,8,9]
const val = arr.newMethod()
console.log(val)

const val1 =arr.pop()
console.log(val1)

 */




//   car constructor is a like blueprints - from which u can create multiple cars

//car object

/* let car={
    brandName: "Skoda",
    seats: 4,
    color: 'blue',
    price: 1000000,
    wheels: 5,
    running: function(){
        console.log("Skoda is fast !")
    }
}
 */

//car constructor function

/* function myName(){
    console.log("this coming from myNme fucntion ", this)
}
myName() */

function Car(brandName, speed, color){
    console.log('this from Car constructor',this) //
    this.brandName= brandName
    this.speed= speed
    this.color= color
    this.running= function(){
        console.log("Skoda is fast !")
    }
}
Car()

//using new keyword  u can create an object instance
let car1= new Car("skoda1",200,'blue')
console.log("car1 line no 82-----------",car1)
console.log(car1.brandName)
console.log(car1.running())

let car2= new Car("skoda2",200,'red')
console.log("car2-----------",car2)
console.log(car2.brandName)
console.log(car2.running())
let car3= new Car("skoda3",200,'white')
console.log("car3-----------",car3)
let car4= new Car("skoda4",200,'blue')
console.log("car4-----------",car4)
let car5= new Car("skoda5",200,'red')
console.log("car5-----------",car5) 

