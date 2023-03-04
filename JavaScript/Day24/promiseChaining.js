//promise
//page request

/* const pageRequest =(url)=>{ //users
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                //key: value
                '/users':[
                    {id:1,username:"Sanjay"},
                    {id:2,username:"Rai"}
                ],
                '/about':'about section',
                './contact':'contacts'
            }
            const result= pages[url]
            if(result){
                resolve({status:200,result})
            }else{
                reject({status:404})
            }
        })
    })

}
pageRequest("/about").then((res)=>{
    console.log("res",res.result)
    console.log("res",res.status)
})
.catch((res)=>{
    console.log("res",res.status)
}) */
const pageRequest =(url)=>{ //users
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                //key: value
                '/users':[
                    {id:1,username:"Sanjay"},
                    {id:2,username:"Rai"}
                ],
                '/users/1':{
                    id:1,
                    username:"Sanjay",
                    location: 'Bangalore',
                    bestBlogId: 9,
                },
                '/users/2':{
                    id:2,
                    username:"Rai",
                    location: 'UP',
                    bestBlogId: 11,
                },
                '/blogs/9':{
                    id:9,
                    details: "Sanjay's Blog"
                },

                '/blogs/11':{
                    id:11,
                    details: "Rai's Blog"
                },
                '/about':'about section',
                './contact':'contacts'
            }
            const result= pages[url]//pages[users]
            if(result){
                resolve({status:200,result})
            }else{
                reject({status:404})
            }
        },3000)
    })

}
/* pageRequest("/users")
.then((res)=>{
    console.log("response--------",res.result)
    console.log("res",res.result[0].id)
    const id = res.result[0].id //1
    console.log("res",res.status)
    pageRequest(`/users/${id}`)
    .then((res)=>{
        console.log("res from /users/id----------",res)
        const bestBlogId= res.result.bestBlogId //9
        pageRequest(`/blogs/${bestBlogId}`)
        .then((res)=>{
            console.log(res)
        })
    })
}) */




//promise Chaining

pageRequest("/users")
.then((res)=>{
    console.log("response--------",res.result)
    console.log("res",res.result[0].id)
    const id = res.result[0].id //1
    console.log("res",res.status)
     return  pageRequest(`/users/${id}`)
})
.then((res)=>{
    console.log("res from /users/id----------",res)
    const bestBlogId= res.result.bestBlogId //9
    return pageRequest(`/logs/${bestBlogId}`)
})
.then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log("res.status", res.status)
})




