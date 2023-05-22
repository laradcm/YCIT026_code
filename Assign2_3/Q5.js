// Q5. Write a program that takes an array of positive integers as input 
// and returns the number with the maximum number of divisors.

// Note:  in return, the program must return found number and the number of divisors in an array, 
// if the program finds multiple answers bigger number will be the answer

// Input sample: 
// [767,665,999,895,907,796,561,914,719,819,555,529,672,933,882,869,801,660,879,985];
// Divput 
// [672, 24]

// //---------------global variables---------------
// //inputs
const arrNums = [24,767,665,999,895,907,796,561,914,719,819,555,529,672,933,882,869,801,660,879,985];
//---------------sequence-----------------------

console.log(getNumWithMaxDivisors(arrNums));

//---------------functions-----------------------

function getNumWithMaxDivisors(arrNumsIn){

    const arrResult = [0,0];

    const arrDivisors = getDivisors(arrNumsIn); 
    console.log(arrDivisors);
    let largestValIndex = getLargestValIndex(arrDivisors,arrNumsIn);

    arrResult[0] = arrNumsIn[largestValIndex];
    arrResult[1] = arrDivisors[largestValIndex];

    return arrResult;
}


function getDivisors(arrNumsIn){

    const arrDiv = [];

    for (let j = 0; j < arrNumsIn.length; j++) {

        arrDiv.push(0);

        for (let i = 1; i <= arrNumsIn[j]; i++) {
            
            if( arrNumsIn[j] % i == 0 ) {
                arrDiv[j] += 1;
            }   
        }
    }
    return arrDiv;
}


function getLargestValIndex(arrIn, arrNumsIn){

    let index = 0;
    let val = 0

    for (const i in arrIn) {

        if( arrIn[i] > val ){
            val = arrIn[i];
            index = i;       
        }

        // if there is more than one largest index, then grab the one with the largest number in arrNumsIn
        if( (arrIn[i] == arrIn[index]) && (arrNumsIn[i] > arrNumsIn[index])){
            index = i;
        }
    }
    return index;
}