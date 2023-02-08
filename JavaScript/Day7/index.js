/* Array methods push pop shift unshift */


const myFlowers=['rose','lily','hibiscus',]
console.log(myFlowers[1]) //lily
console.log("push------------------------------")
/* push  -  to add an element at the end of the array */
console.log(myFlowers.length)
console.log(myFlowers.push("Tulips"))
console.log(myFlowers) //
const returnOfPush= myFlowers.push("jasmine")//returns the updated length
console.log("returnOfPush",returnOfPush)
/* console.log(myFlowers.push("jasmine")) */
console.log(myFlowers)

console.log("pop-------------------------------")
/* pop - to delete an element at the end of the array */

console.log("before popping",myFlowers)
console.log(myFlowers.pop())// returns the element that was deleted
console.log("after popping",myFlowers)

console.log("unshift-------------------------------")
/* unshift to add an element at the beginning of the array
*/
console.log("myFlowers before unshift",myFlowers)
console.log(myFlowers.unshift('marigold')) // returns the updated length of the array
console.log("myFloers after unshift", myFlowers)

console.log("shift----------------------")
/* shift - to delete an element at the beginning of the array*/
console.log("myFlowers before shift",myFlowers)
console.log(myFlowers.shift())
console.log("myFlowers after shift",myFlowers)



/* data structure - object */


const myPhone=[
    "iphone",
    "iphone 12",
    "12mp",
    "20mp",
    
]
//myPhone[2]

/* object */
//key : value
//brandName : Iphone
//modelName : iphone 12

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
console.log("myPhoneObj",myPhoneObj)
/* dot notation */
console.log(myPhoneObj.backCamera) //20px
console.log(myPhoneObj.colorvariants)
console.log(myPhoneObj.colorvariants[2])
console.log(myPhoneObj.backCamera)

/* bracket notation */
console.log(myPhoneObj["brandName"])
console.log(myPhoneObj["modelName"])
console.log(myPhoneObj["isFiveGEnabled"])

const temp = "front"
console.log(myPhoneObj[temp+"Camera"]) //"front"+"Camera" ---> frontcamera
const temp1="WaterProof"
console.log(myPhoneObj["is"+temp1]) ///* in bracket notation we can put any js expression */



