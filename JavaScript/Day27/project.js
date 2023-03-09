// https://randomuser.me/api?results=50

const filter= document.getElementById('filter')
const result= document.getElementById('result')
const userList=[]
getUserData()
async function getUserData(){
    const res= await fetch("https://randomuser.me/api?results=50")
/*     console.log("response",res) */
  /*   const result= await res.json()

    console.log("result",result.results) */

    const {results} = await res.json()
  /*   console.log("result",results) */

    results.forEach((user)=>{ //50 users
      /*   console.log("users------",user) */
        const li= document.createElement("li")
        userList.push(li)

        li.innerHTML= ` 

        <img src="${user.picture.large}">

        <h3> ${user.name.first} ${user.name.last}</h3>    
        
        `

        result.append(li)


    })
 
}
/* 

//filter
//indexOf
 */
function filterUserData(searchInput){

    console.log("searchInput---",searchInput)
    console.log("userList------",userList)
    userList.forEach(item=>{

        if(item.innerText.toLowerCase().includes(searchInput.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add("hide")
        }
    })

}

filter.addEventListener("input",(e)=>{
    console.log("event",e)

    filterUserData(e.target.value) //search input 
})


