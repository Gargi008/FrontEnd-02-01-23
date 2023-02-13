/* 
          *
         ***
        *****
       *******
*/

let num=4;
let pattern = ""
for (i=1;i<=num;i++){// i == 1--> 2
    //printing the spaces
   for(j=1;j<=num-i;j++){
    pattern += " "
   }
   for(let k=0;k<2*i-1;k++){
    pattern += j
   }
   pattern +="\n"
}
console.log(pattern)