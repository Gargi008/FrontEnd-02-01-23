/*  */

console.log("local and global variables")
let score = 80
console.log("before the function",score)
function myScore(){
    let s= 100; //local variable
    console.log("inside function",s)
    console.log("inside the function",score)
}
myScore()

//console.log("outside function",s) /* ReferenceError: s is not defined */
console.log("after the function",score)


for(let i=0; i<=3; i++){ 
    console.log(i)
    console.log(score)
}

/* hello - olleh */

let myStr= "hello"//5
let finalStr= ""
/* for (let i =0 ; i<myStr.length ; i++){
    console.log(myStr[i])
} */
for (let i=myStr.length-1; i>=0; i--){
    finalStr += myStr[i] //"" //o
    //finalStr= finalStr + myStr[i]
    // ""+o //o
    //o + l //ol
    //ol + l //oll
    //oll + e //olle
    //olle + h ..olleh
    console.log(myStr[i])
    
}
console.log(`the reversed string is ${finalStr}`)


let myNewStr= "hello" //string
/* console.log(myNewStr.split('').reverse().join(''))  */


//String --> array --> reversed array --> string
let mynewArr= myNewStr.split('') // string --> array
console.log("mynewArr",mynewArr)
let myReversedArr= mynewArr.reverse()
console.log("myReversedArr",myReversedArr)
let finalString= myReversedArr.join('')
console.log("finalString",finalString)








/* const a= ['a','b','c','d']
console.log(a.reverse()) */



