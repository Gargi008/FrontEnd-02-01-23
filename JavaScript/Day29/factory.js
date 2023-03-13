//factory functions

//factory functions are those functions 
//which creates object everytime it is called

/* rgb(255,255,255) */

function makecolor(r,g,b){
    const color={}
    color.r=r
    color.g=g
    color.b=b

    color.rgb= function(){
        console.log("this---",this)
        return `rgb($(r),$(g),$(b))`
    }
    return color
}


const myColor1= makecolor(255,255,255)
console.log("myColor1",myColor1)
const myColor2= makecolor(255,0,255)
console.log("myColor2",myColor2)
const myColor3= makecolor(255,255,255)
console.log("myColor3",myColor3)



