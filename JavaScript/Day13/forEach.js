//array method

//forEach - accepts  a callback function
//it calls the function once per element in the array/

const num = [9,8,7,6,5,4]
console.log("num before foreach",num)
num.forEach(function(n){
    console.log(n*4)
   
})
console.log("num after foreach",num)



const students = [
  {
    id: 1,
    name: "Sai",
  },
  {
    id: 2,
    name: "Arthy",
  },
  { 
    id: 3, 
    name: "Ram" 
  },
  {
    id: 4,
    name: "Shyam",
  },
  {
    id: 5,
    name: "Ali",
  },
];



students.forEach(function stuDetails(stuInfo){
    console.log(stuInfo)

})