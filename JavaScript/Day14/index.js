/* DOM - Document object model */
/* DOM - is the structured representation of a html document */
/* Document object is the entry point of your dom tree */
/* each and every element of the html document is a node of the dom tree */
/* inside an dom tree each and evry element is an object */



const grandpaa= document.getElementById("grandpaaid")
const parent1= document.getElementById("parentid1")
const parent4= document.getElementById("parentid4")
const child1= document.getElementById("childid1")
const child= document.getElementsByClassName("child")
const parent= document.getElementsByClassName("parent")

/* console.log(typeof(grandpaa))
console.log(typeof(parent1))
console.log(typeof(child1)) */
//console.log(grandpaa)
//console.log(parent1)
console.log(child1)
console.log(child)
console.log(parent)

changeColor(parent4)
changeColor(child1)





function changeColor(val){
    val.style.backgroundColor= "yellow"
}






