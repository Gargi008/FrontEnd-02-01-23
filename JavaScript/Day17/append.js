const content= document.body;

/* 1. create an Element
2. add it to the dom */

const newDiv= document.createElement("div")
const newH1= document.createElement("h1")

content.append(newDiv)
newDiv.append(newH1)
newH1.append("hello")



/* we are have 2 ways of adding elements to our DOM  */

/* 

1. append
2. appendChild

 */


/* append

1. add a node object
2. DOMString

*/
const parent= document.createElement("div")
const child1= document.createElement("h1")
const child2= document.createElement("h1")
const child3= document.createElement("h1")

/* content.append(parent)
parent.append(child1)
parent.append(child1,child2,child3) */
/* child1.append("hurray")
parent.append(child2)
child2.append("hurrayyy")
parent.append(child3)
child3.append("hurrayyyyy") */

/* appendChild */

/* 
1.we can add a node object
2. we can't add a DOMString
*/

const parentAC=parent.appendChild(child1)
const bodyAC= content.appendChild(parent) 
console.log('parentAC',parentAC)
console.log('bodyAC',bodyAC)
child1.append("hello")
/* child1.appendChild("hello") */




