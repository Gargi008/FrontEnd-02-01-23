//async

/* function myName(){
    console.log("Gargi Chakraborty")
}

myName() */

//asynchrounous function 
//it is a easy and nice syntax for promises
// write the async keyword before the function name and the function becomes asynchrounous
// it returns a promise 
async function myName(){
    return "Gargi Chakraborty"
}

/* const val = myName()
console.log(val) */

myName().then((val)=>{
    console.log(val)
})


/* function addition(a,b){
    return new Promise ((resolve, reject)=>{
        if(typeof a !== "number" || typeof b !== "number"){
            reject()
        }
        resolve(a+b)
    })
}
addition(56,99).then((val)=>{
    console.log("addition",val)
}).catch((err)=>{
    console.log("promise is rejected", err)
}) */


async function addition(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw 'wrong input ,, pls enter number values'
    }
    return a+b
}

addition(56,99).then((val)=>{
    console.log("addition using async function ",val)
}).catch((err)=>{
    console.log("promise is rejected", err)
})


