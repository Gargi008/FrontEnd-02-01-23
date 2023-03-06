

//fetch() methods returns a promise that resolves to the response to the request 
//fetch() methods takes a mandatory argument , the url or the pat of the resourse u wanna fetch from

const getBtn = document.querySelector("#getBtn")
const postBtn = document.querySelector("#postBtn")
//
//entire HTTP response
//to extract the JSON body from the response object
// we use json() method
const userInfo=(method, url, data)=>{
    return fetch(url,{
        method: method,
        headers : data ? {'content-Type' : 'application/json'} : {},
        body : JSON.stringify(data)

    }).then(response=>{
        if(response.status >=400){
            console.log("response", response)
        }
        return response.json() //returns a second promise which is resolved with 
        //the result of parsing the response body text as JSON
    })

}
const getUser=()=>{
    userInfo("GET","https://reqres.in/api/users/1").then(responseData =>{
        console.log("get response",responseData)
    })
}
const PostUser=()=>{
    userInfo("POST","https://reqres.in/api/users/",{
        "name": "morpheus",
        "job": "leader"
    }).then(responseData =>{
        console.log("post response",responseData)
    }).catch(error=>{
        console.log(error)
    })
}


getBtn.addEventListener("click",getUser)

postBtn.addEventListener("click",PostUser)


