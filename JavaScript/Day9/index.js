const myCycles=[]
/* built-in methods */

//push pop shift unshift

/* loop */
/* 0-100 */
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("for loop----")
for(let i=0; i<=3; i++){ // 0 , 99 //range 
    console.log(i)
}

/* initialization*/
/* condition  */
/* increment / decrement */

/* 

for(intial expression / initialization ; condition ; increment /decrement ){
    //statement
}

*/
for ( let i= 5; i>=1 ; i--){
    console.log(i)
}

/* hackerrank
   hackerearth
   leet code
*/

/* while loop */
console.log("while looppppppppp")
/* let i=0; //dry run //i=0
while(i<=5){ // 0<5 // 1<5 //2<5 // 3<5 //4<5 
    console.log(i) //0 //1 //2 //3 //4 
    i+=1//i=i+1 // 0 --> 1 // 1--> 2 / 2--> 3 // 3 --> 4// 4--> 5

} */
let i=5; //dry run //i=5
while(i<=50){ // 5<=50 // 10<=50
    console.log(i) //5 //10
    i+=5//i=i+1 // 5+5 -->10 //10+5 --> 15

}

/* break and continue */
console.log("-----------------------")
let j=0;//j=0
while(j<=10){ //0<=10 //1<=10 //....// 7<=10
    if(j==7){// 0==7 //1==7 ..... //7==7
        j+=1; //7+1//8
        break;
        
        
    }
    console.log(j) //0 1 2 3 4 5 6 8 9 10
    j+=1 //0+1 --> 1 //...// 6+1 --> 7
}
/* console.log("-----------------------")
let k=0;//j=0
while(k<=10){ //0<=10 //1<=10 //....// 7<=10
    if(k==7){// 0==7 //1==7 ..... //7==7 //8==7
     k+=1;
     continue;
     
    }
    console.log(k) //0 1 2 3 4 5 6 8 9 10
    k+=1 //0+1 --> 1 //...// 6+1 --> 7
} */
/* do while */
console.log("do while")
let k = 5;
do {
    console.log(k); //5
    k+=1; //5+1 = 6
}while(k<=0) //6<=0

/* for of  */

//array 

const myCars = ['Audi', "Rolls-Royce", "BMW", "Thar", "Maruthi800", "porsche", "Skoda"] // []
/* 



/* for ( let i=0; i<myCars.length ; i++ ){ // 0 1 2 3 4 5 6
    console.log(myCars[i])
} */

/* for of - array */
for (let i of myCars){ //i = "audi "// i== "Roll"
    console.log(i)
} 
/* for in  */
/* for in - object */
const myPhoneObj = {
    //key : value
    colorvariants : ['red', 'blue', 'black'],
    brandName : "Iphone",
    modelName : "Iphone12",
    frontCamera : "12mp",
    backCamera : "20mp" ,
    price : 80000,
    isWaterProof : true,
    isFiveGEnabled : true, 

}
for (let i in myPhoneObj ){
    console.log(`${i} : ${myPhoneObj[i]}`)
}

