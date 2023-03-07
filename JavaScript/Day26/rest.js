//rest

/* function sum(){
    let totalSum= 0;
    console.log("arguments",JSON.stringify(arguments))
    console.log("arguments",typeof arguments)
    for (let i=0; i<arguments.length; i++){
        totalSum += arguments[i] // 0+6+9+78+99
    }
    return totalSum
}


const result= sum(6,9,78,99,88,56)
console.log("result-----------",result)
 */


/* function sum(){
    console.log(arguments)
    const argumentsArray=[...arguments]

} */
//rest - it collects all the arguments and it puts them into an array
/*  function sum(...nums){
    console.log(nums)//array

    return nums.reduce((totalSum,curVal)=>{
        return totalSum+= curVal
    })

}
const result= sum(6,9,78,99,88,56)
console.log("result-----------",result) */


function myFullName(fname,lname, ...others ){
    console.log(fname)
    console.log(lname)
    console.log("others----------",typeof others)
    console.log("typeof others----------",others)

}

myFullName("Gargi","Chakraborty","a","b","c","d","e","f","g")