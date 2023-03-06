/* 

Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.*/


const getBtn = document.querySelector("#getBtn")
const postBtn = document.querySelector("#postBtn")


const getUser=()=>{
    axios.get("https://reqres.in/api/users/").then(response=>{
        console.log(response)
    })
}
const postUser=()=>{
   axios.post("https://reqres.in/api/users/",{
        "name": "morpheus",
        "job": "leader"
    }).then(responseData =>{
        console.log("post response",responseData)
    }).catch(error=>{
        console.log(error)
    })
}

getBtn.addEventListener("click",getUser)
postBtn.addEventListener("click",postUser)