let input= document.querySelector("#userInput")
let btn= document.querySelector("#btn")
let mytodos = document.querySelector(".mytodos")


btn.addEventListener("click",function(){
    console.log(input.value)
    let para= document.createElement('p')
   /*  para.classList.add("para") */
    para.setAttribute('id',"para1")
    //para.setAttribute('class',"para")
    para.innerText= input.value

    mytodos.append(para)
    input.value=''

    para.addEventListener('click',function(){
        para.style.textDecoration="line-through"
        para.style.textDecorationColor="grey"
    })


    para.addEventListener('dblclick',()=>{
        para.remove()
    })

})




