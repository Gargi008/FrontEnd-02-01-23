//await
//https://reqres.in/api/users/1

/* function user(){
    return axios.get("https://reqres.in/api/users/1")

}

user().then((response)=>{
    console.log(response)
}) */


async function user(){
    console.log("before call")
    const response = await axios.get("https://reqres.in/api/users/1")
    // await keyword pauses the execution of the function
    // while it waits for thhe promise to get resolved or rejected
    console.log("response",response)
    console.log("after call")

} 
console.log("hello")
user()
user.catch((error)=>{
    console.log("error",error)
    console.log("Something went wrong :( ")
})
console.log("bye")

