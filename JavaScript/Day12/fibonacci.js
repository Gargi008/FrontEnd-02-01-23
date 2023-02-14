/* fibonacci series */

/* 0 1 1 2 3 5 8 13 21 34 55 89*/
/* any no is summation of the previous two values provided the first and second no is 0 and 1 respectively */
let num =15
let n1=0
let n2=1;
for (let i=0; i<=num; i++){

   console.log(n1) //0 1 1 2 3 5 8
    n3= n1+n2
    n1=n2
    n2= n3
}



