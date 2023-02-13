/* 
          *
         * *
        * * *
*/

let num=5;
let pattern = ""
for (i=1;i<=num;i++){// i == 1--> 2
    //printing the spaces
   for(j=i;j<=num;j++){
    pattern += " "
   }
   for(let k=1;k<=i;k++){
    pattern += "* "
   }
   pattern +="\n"
}
console.log(pattern)