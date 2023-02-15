//Array methods

// map methods creates a new array with the results of the 
//calling a callback function on each element of the array
const num = [9,8,7,6,5,4]

const newNumArr= num.map(function(n){
    console.log(n*2)
    return n*2

}) //The map method calls the callbackfn function one time for each element in the array.
console.log(num)
console.log(newNumArr)


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


const newStudentArr= students.map(function StudentName(stuName){
    console.log(stuName.id)
    console.log(stuName.name.toUpperCase())
    return stuName.name
})
console.log(newStudentArr)