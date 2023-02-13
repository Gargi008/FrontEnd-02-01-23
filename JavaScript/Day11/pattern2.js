/* 


****
***
**
*


*/

let num= 6;
let pattern ="";
for (let i=1;i<=num;i++){
    for (let j=1; j<=num-i; j++){
        pattern += j,i;
    }
    pattern += "\n"
}

console.log(pattern)