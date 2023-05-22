// Q1. Determining the prime number
// In this program, read a positive number from the input and determine whether it is prime or not.
// If it is a prime number, print the expression "prime" in the output, 
// and if it is not a prime number, print the expression "not prime" in the output.

// Input sample: 
// 25 
// output: 
// not prime

// Input sample: 
// 17 
// output: 
// prime

// const prime = [2,3,5,7,11,13,17,19,524287];
// const notPrime = [1,4,6,8,9,10,12,14,15,16,18,20,121];

// for (const val of prime) {
//     console.log(val + " " +  isPrime(val));
// }
// console.log("---------------------");
// for (const val of notPrime) {
//     console.log(val + " " + isPrime(val));
// }

function isPrime(n){

    let result = true;

    if(n == 1){// 1 is never prime

        result = false;

    }else{

        for (let i = 2; i < n; i++) {

            if(n % i == 0){
                result = false;
                break;
            } 
        }
    }
    return result;
}

