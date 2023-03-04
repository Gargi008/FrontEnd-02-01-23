//XHR - XMLHttpRequest


//XHR is a js api to create ajax requests
//this method gives us the ability to send requests between browser and server



const getBtn = document.querySelector("#getBtn")
const postBtn = document.querySelector("#postBtn")


const userInfo= (method, url, data)=>{

  const promise = new Promise((resolve,reject)=>{

    /* Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
    
    
    //1. instatiate the XHR object
    const xhr= new XMLHttpRequest()

    //2. open the object 
    //method - https request get /post 
    xhr.open(method,url)

    //3. json
    xhr.responseType="json"
    //4. onprogress
    xhr.onprogress=()=>{
        //spinner
    }

    //5.xhr.onload()

    xhr.onload=()=>{
        if(xhr.status >= 400){
            reject(xhr.response)
        }else{
            resolve(xhr.response)
        }
    }

    xhr.onerror=()=>{
        reject("rejected")
    }
    
    //6. 
   // JSON.parse --> it parses the JSON string to js value
   //json.stringify --> methods converts the js value to a json string
    xhr.send((JSON.stringify(data)))

  })
  return promise;

}

const getUser=()=>{
    userInfo("GET","https://reqres.in/api/users/1").then(responseData =>{
        console.log("get response",responseData)
    })
}
/* const PostUser=()=>{
    userInfo("POST","https://reqres.in/api/users/",{
        "name": "morpheus",
        "job": "leader"
    }).then(responseData =>{
        console.log("post response",responseData)
    }).catch(error=>{
        console.log(error)
    })
}
 */


const GetQuiz=()=>{
    userInfo("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/quiz"
        ).then(responseData =>{
        console.log("post response",responseData)
    }).catch(error=>{
        console.log(error)
    })


}
getBtn.addEventListener("click",getUser)
/* postBtn.addEventListener("click",GetQuiz) */
/* postBtn.addEventListener("click",PostUser) */
