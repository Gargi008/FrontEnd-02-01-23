/* DOM - Document object model */
/* DOM - is the structured representation of a html document */
/* Document object is the entry point of your dom tree */
/* each and every element of the html document is a node of the dom tree */
/* inside an dom tree each and evry element is an object */

//const grandpaa= document.getElementById("grandpaaid")
//const grandpaa= document.getElementsByClassName("grandpaa")

/* targetting the elements
1. getElementById
2. getElementsByClassName
3. querySelector
4. querySelectorAll
5. getElementsByTagName


*/
//const grandpaa= document.getElementById('grandpaaid')
//const grandpaa= document.getElementsByClassName('grandpaa')
//const grandpaa= document.querySelector('.grandpaa')
//const grandpaa= document.getElementsByClassName("grandpaa")/* HTMLcollection object */
//const parent= document.getElementsByClassName("parent")/* HTMLcollection object */
//const parent= document.querySelector('.parent')




//const parent= document.querySelectorAll('.parent')
/* const parent= Array.from(document.getElementsByClassName('parent'))
const parent2= document.querySelector('#parentid2')
const h1= document.querySelector('#title')
//const h1= document.getElementsByTagName('h1')
const p= document.getElementsByTagName('p')
const parent1= document.getElementById("parentid1")
const parent4= document.getElementById("parentid4")
const child1= document.getElementById("childid1")
const child= Array.from(document.getElementsByClassName("child")) */


/* console.log(typeof(grandpaa))
console.log(typeof(parent1))
console.log(typeof(child1)) */
//console.log(`here comes my grandpaa -----> ${grandpaa}`)
//console.log(grandpaa)
//console.log(typeof(parent))
//console.log(parent[1])

//changeColor(child1)
//child.forEach(changeColor)

//console.log(h1)
//console.log(parent1)
/* console.log(child1)
console.log(child)
console.log(parent) */

//changeColor(h1)
//changeColor(parent)

function changeColor(val){
    val.style.backgroundColor= "yellow"
}

//select the children of the parent


//const grandpaa= document.querySelector("#grandpaaid")
/* const child= document.querySelector('.child')

changeColor(child) */

//parent of a child

/* const child2= document.querySelector('#childid2')
const parent2= child2.parentElement
changeColor(parent2)
const grandpaa= parent2.parentElement
changeColor(grandpaa)
 */

//select the grandparent of the child

/* const child3= document.querySelector('#childid3')
const grandpaa= child3.closest(".grandpaa") */
//const grandpaa= document.querySelector('.grandpaa')
/* querySelector moves downwards */
/* closest moves upwards */

//changeColor(grandpaa)
/* 
const child1= document.querySelector("#childid1")
const child2= document.querySelector("#childid2")
const child4= document.querySelector("#childid4")


console.log(child1)
console.log(child2)
console.log(child4)
changeColor(child4.previousElementSibling) */


/* The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list. */

/* The Element.previousElementSibling read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list. */

const parent1= document.querySelector("#parentid1")
const parent3= document.querySelector("#parentid4")
console.log(parent1)
console.log(parent3)

changeColor(parent3.previousElementSibling)


const p= Array.from(document.getElementsByTagName('p'))
console.log(p)
changeColor(p[0])
p.forEach(changeColor)












