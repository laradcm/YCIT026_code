// Q4. Referring to question 3, 
// write a program that returns the largest and the second largest value this time

// Input sample: 
// [17,15,39,51,14,32,28];
// output 
// [51, 39]

//---------Global Variables----------
// //inputs
// const arrInput = [17,15,39,51,14,32,28,0,100];
// //outpus
// let arrStats = [];

// //--------Sequence-------------------
// arrStats = getLargestTwo( arrInput);
// console.log(arrStats);


//--------Functions------------------
function getLargestTwo(arrIn){

    const arrOut = [0,0];

    for (const val of arrIn) {

        if( val > arrOut[0] ){

            arrOut[0] = val; //get Largest number
        }

        if( val > arrOut[1]  &&  val < arrOut[0] ){

            arrOut[1] = val; //get second largest number
        }   

    }
    return arrOut;
}