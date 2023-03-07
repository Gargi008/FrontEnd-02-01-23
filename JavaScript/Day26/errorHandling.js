//error handling


async function user(){
    try{
        const response = await axios.get("https://reqres.in/api/users/a") 
        console.log(response)
    }catch(error){
        console.log("error",error)
        console.log("Something went wrong :( ")
    }
}
user()