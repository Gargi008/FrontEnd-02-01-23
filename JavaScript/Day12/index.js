// Question 1:
// Write a program to search if a number exists in an array. 
//If the number exists then return the position. If it exists multiple time then return an array with all the positions. 
//If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1


const arr= [1, 2, 3, 4, 5, 1,3]
const searchElement= 3

function arrSearch(){
    const finalResult=[]
    let searchPosition ;
    let count= 0;
    for (let i=0;i<arr.length;i++){ //
        //console.log(arr[i])
        if (searchElement== arr[i]){
            searchPosition= i //2 //6
            finalResult.push(i) //[2,6]
            count++;// 0--> 1  --> 2 --> 3
        }
    }
  
    if(count == 1){
        return searchPosition;
    }else if (count>1){
        return finalResult;
    }else{
        return -1;
    }
}
let finalVal=arrSearch()
console.log(finalVal)
