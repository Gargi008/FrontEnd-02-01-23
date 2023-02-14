/* armstrong number*/

//153 -- 1^3 + 5^3 + 3^3 = 1 + 125 + 27 =  153


//1634 - 1^4 + 6^4 + 3^4 + 4^4 = 1+ 1296 + 81 + 256 =  1634


const originalNum = 9474
const digit = String(originalNum).length
console.log(digit)

let temporary= originalNum;
let totalSum = 0

while(temporary>0){ //153

    let remainder= temporary % 10 // 153% 10 //3 //5 // 1
    totalSum += remainder ** digit
    temporary = parseInt(temporary/ 10) //153 /10 -->15
}

if(totalSum === originalNum){
    console.log("Armstrong Number")
}else{
    console.log("Not armstrong number")
}






