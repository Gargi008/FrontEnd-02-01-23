/* 

54321
4321
321
21
1

*/

let num = 5
let pattern="";
for ( i =1; i<=num; i++){
    for ( j=1;j<= num -i+1; j++){
        pattern +=num -i-j+2
    }
    pattern +="\n"
}

console.log(pattern)
