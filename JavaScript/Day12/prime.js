/* prime number -  a positive integer no that is divisible by 1 and itself */


const num = 9
let isPrime = true;
if ( num == 1){
    console.log(" 1 is neighter a prime nor a composite number ")
} else if( num > 1 ){
      for ( let i =2 ; i< num/2 ; i++ ){
        if( num % i == 0){
            isPrime = false;
            break;
        }
      }
      if(isPrime){
        console.log("Prime ")
      }else{
        console.log("not a prime no")
      }
}