/* HOF - Higher Order Function */

//function which operates on or with other function


//it can accept any other function as an argument
//it return a function 

/* function heyaa(x){
    console.log("heyaaa")
    console.log(x)
}
heyaa(11) */

function work(f){ //sing function is being passed as the parameter //work(sing)
    f() //sing()
}
function sing(){
    console.log("I am singing")
}
function dance(){
    console.log("I am dancing")
}

work(sing)

function makeRandomChoices(f1,f2){
    let randVal = Math.random() // Returns a pseudorandom number between 0 and 1.
    console.log("randVal",randVal)
    if(randVal > 0.5 ) {//0<x<1 //0.7 //0.3
        f1()
    }else{
        f2()
    }
}
makeRandomChoices(sing,dance)

//callback function

// a function that accepts another function as an argument.


function hello(){
    console.log("hellooooo")
}

setTimeout(hello,3000) //timer

setTimeout(function coding(){console.log("I love coding")},3000)


//anonymous function
setTimeout(()=>{
    console.log("I love coding")
},3000)