const colors=['violet','indigo','blue','green','yellow','orange','red']





/* for(let i of colors)
{console.log(i)
} */

const h1= document.querySelector('h1')
const container= document.querySelector('.container')

for (let selectedColor of colors){
    console.log("selectedColor",selectedColor)
    const colorBox= document.createElement("div")
    colorBox.style.backgroundColor= selectedColor
    colorBox.classList.add('box')
    container.append(colorBox)


    colorBox.addEventListener("click", ()=>{
        h1.style.color=selectedColor
    })

}




