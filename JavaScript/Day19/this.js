/* 1. if this is used on it's own , it refers to the window object */
console.log("this---------------- 1",this)

/* window - global object */


/* 2. if this is used inside a normal function , this refers to the window object */
function multiplication(a,b){
    console.log(a*b)
    console.log("this----------------2 ",this)
    return a*b

}
function sumofTwo(a,b){
    console.log(a*b)
    console.log("this----------------2 ",this)
    return a+b

}

multiplication(99,77)

var manohar= "good"

/* this keyword refers to the object it belongs to  */
const student= {
    name : 'Gargi',
    city: 'Kolkata',
    exam: function(){
        console.log("lets go to the exam hall")
        console.log("this is inside the method of the student object", this)
    }

}

console.log(student.exam())



/* the value of this keyword  depends on where it's used. */

/* if this is used on it's own , it refers to the window object */
/* when this is used inside a normal function , it refers to the window object */
/* when this is inside a method, it refers to the object that is belongs to. */