
/* jQuery is a js library 
lightweight
"write less do more"

the main purpose of using jQuery is to make it easier for us to write js on our website


jQuery takes lots of common tasks that require many lines of codes
//and it wraps tem into a method that u can call with a single of code


*/


/* $('selector).action */
console.log("am I coming")
$(document).ready(function(){

   /*  $('#para').click(function(){ 
        console.log("my para is being displayed id selector", this)
    })
    $('p').click(function(){
        console.log("my para is being displayed - element selector", this)
    })

    $("*").hover(function(){
        console.log(" I hovered on ", this)
    })
    
    $("*").mouseenter(function(){
        console.log(" mouseenter event", this)
    })
 */
    //on method 

    $("#para").on({
        mouseover: function(){
            console.log("mouse over event")
        },
        dblclick: function (){
            console.log("double click event")
        }
    })
})






