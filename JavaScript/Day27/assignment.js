

const response= fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
response.then((res)=> res.json())
.then((responseData)=>{

    const formContainer= document.createAttribute("form")
    blueBox.append(formContainer)
    responseData.map((item)=>{

        //item.question
        //item.id

        item.options.map((option)=>{
            const quizOption= document.createElement("input")
            quizOption.type="radio"
            quizOption.value= option
            //label
        })

    })



})


getBtn.addEventListener("click", function (){
    for ( let i =0 ; i< correctAnswer.length;i++){
        if(correctAnswer[i]=== givenAns[i]){
            score = score +1
        }
    }
})