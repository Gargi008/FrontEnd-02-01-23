/* stack -  FILO or LIFO */
/* queue - FIFO or LILO */


/* Call stack */

/*  js engine uses callstack to manage the execution context */


const multiply= (x,y)=>x*y // 4*6--> 24 // 4*4 --> 16

const square= (x)=>multiply(x,x) // 5^2 --> 5 * 5

const isRightAngleTriangle = (a,b,c)=>{
    if(square(a)+ square(b) === square(c)){
        console.log("yea the triangle is a right angle triangle")
        return square(a)+ square(b) === square(c)
    }else{
        console.log("It is not a right angle triangle")
    }
}

isRightAngleTriangle(3,4,5)

/* A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc. */


/* GEC - global excution context */

function one(){
    console.log("I'm the first")
    
}
function two(){
    one()
    console.log("Two come second")
}

two()