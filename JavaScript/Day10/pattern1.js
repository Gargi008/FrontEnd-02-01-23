/* 

*
**
***
****

*/


console.log("pattern-------------------------")

let num=4;
let pattern =""


/* for (i= 1;i<=num;i++){ // i =1
    for(j=1;j<=i;j++){  //j=1 , 1<=1
        pattern += "*"
    }
    pattern += "\n"
} */
/* for (i= 1;i<=num;i++){ // i =1
    for(j=1;j<=i;j++){  //j=1 , 1<=1
        pattern += i
    }
    pattern += "\n"
} */
for (i= 1;i<=num;i++){ // i =1
    for(j=1;j<=i;j++){  //j=1 , 1<=1
        pattern += j
    }
    pattern += "\n"
}

console.log(pattern)

