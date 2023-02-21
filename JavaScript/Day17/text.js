let btn1= document.querySelector('#btn1')
let btn2= document.querySelector('#btn2')
let content= document.querySelector('.content')


let content1=` <h1 id="title">hello Events</h1>
<button id="btn1">toggle</button>
<button id="btn2">knock knock</button>

<p id="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam molestiae, minima a quibusdam quia expedita dicta commodi, eos reiciendis error, dolor blanditiis. Nobis cum sit natus inventore recusandae explicabo possimus.</p>

<ul id="itemlist">
    <li>pressure cooker</li>
    <li>batman</li>
    <li>ironman</li>
    <li>rcb</li>
</ul>


<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ad molestias magnam minima blanditiis labore facere modi eius fuga saepe architecto, earum perferendis iusto eos. Illum suscipit aliquam id delectus consequatur nulla ad unde soluta iusto beatae. Exercitationem, earum blanditiis.</p>
<img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width=" 400px">
<section>
    <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
    </ul>
</section>
`
btn1.addEventListener("click",()=>{
    content.innerText=content1
})
btn2.addEventListener("click",()=>{
    content.innerHTML=content1
})