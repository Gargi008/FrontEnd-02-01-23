/* events */

//const btn= document.querySelector('#btn')


//addEventListener //accepts 2 paramets

/* 1. event name
2. callback function */

/* function mutiply(a,b){
    return a*b // 66 * 88
}

const a= mutiply(66,88) */
/* btn.addEventListener("click",function amIClicked(){
    alert("I am clicked just now")
}) */


//--------------------------

const btn1= document.querySelector('#btn1')

btn1.addEventListener('click',toggle)

function toggle(){
    let title= document.querySelector("#title")
    if(title.style.display !== "none"){ // if it is showing then hide it
        title.style.display="none"
    }else{
        title.style.display="block"
    }
}

const itemlist = document.querySelectorAll('li')
console.log(itemlist)

for ( let i of itemlist){
    console.log(i)
    i.innerText="yaaayyyyyyy"
}


const para =  document.querySelector("#para")
let count=0
para.addEventListener("click", function paraClick(event){
    console.log(event)
    count++;
    console.log(count)

})


document.addEventListener("keydown", function newKeyDown(event){
    console.log("keydown event")
    console.log("event object", event)
})
document.addEventListener("keyPress", function newKeyDown(event){
    console.log("keyPress event")
    console.log("event object",event)
    
    
})
document.addEventListener("mousedown", function newKeyDown(event){
    console.log("keyPress event")
    console.log("event object",event)
    
    
})
document.addEventListener("mouseover", function newKeyDown(event){
    console.log("keyPress event")
    console.log("event object",event)
    let val= event.target
    console.log(val)
    
    
})





