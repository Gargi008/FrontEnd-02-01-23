let cars=['skoda', 'kia','jaguar','audi','bmw']

/* const firstCar = cars[0]
const secondCar = cars[1]
const thirdCar= cars[2]

console.log(firstCar)
console.log(secondCar)
console.log(thirdCar) */


const [one,two,three,,four]= cars  // array destructuring


console.log(one)
console.log(two)
console.log(three)
console.log(four)

let months=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']


const [m1,m2,m3, ,...othermonths]=months
/* const [,,m3, ,...othermonths]=months */

console.log(m1)
console.log(m2)
console.log(m3)
console.log(othermonths)

/* object destructuring */

const student= {
    name : 'Gargi',
    city: 'Kolkata',
    job: 'IBM',
    carrer : 'Music'
}
let {name : myName, city : myCity, ...otherDetails}= student
console.log('myName',myName)
console.log('myCity',myCity)
console.log('otherDetails',otherDetails)



