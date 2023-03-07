// spread

const colorvariants=['red', 'blue', 'black']
const weekDays= ['Monday' ,'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'sunday']
const nature = ['sky','water','fire','sand','air']
//spread - it makes a clone -
//it creates a new array in the memory with the unique reference
const duplicateColorVariant = [...colorvariants]
console.log("duplicateColorVariant",duplicateColorVariant)

if(colorvariants === duplicateColorVariant ){
    console.log("how can possibly the be same ?????????")
}
else{
    console.log("yupppp , told yaaaaaa, it creates a new array in the memory with the unique reference")
}


const newArray= [...colorvariants, ...weekDays, ...nature]
console.log("newArray",newArray)




