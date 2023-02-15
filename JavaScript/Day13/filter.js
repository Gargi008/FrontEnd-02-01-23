//filter

//filter methods creates a new array  with all the elements
//that satisfy the condition  that is implemented by the function

const num = [9,8,7,6,5,4,3,2,1]

const evenArr= num.filter(n=>n%2===0)
/* const evenArr=num.filter((n)=>{
    return n%2===0

}) */
const oddArr= num.filter(n=>n%2!=0)
console.log(evenArr)
console.log(oddArr)