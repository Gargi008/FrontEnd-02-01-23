//promise
// resolved or rejected


/* callback hell  */
//asynchronous -- 


const ChristywillGetIphone = new Promise ((resolve,reject)=>{

    setTimeout(()=>{
        const marks= Math.random() * 100  // 0.9 * 100 = 90
        console.log(marks)
        if(marks> 90){
            resolve()  
        }else{
            reject()
        }
    }, 2000)
})

//if the promise is resolved then u go inside the .then menthod

ChristywillGetIphone.then(()=>{
    console.log("Yaayyyyy Christy got an IPhone!!!")
})

ChristywillGetIphone.catch(()=>{
    console.log("next time her mom will keep her promise :)")
})

