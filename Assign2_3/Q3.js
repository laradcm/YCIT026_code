// Q3. Write a program that takes an array of positive integers as input
// and returns the smallest and largest member as another array.

// Input sample: 
// [17,15,39,51,14,32,28];
// output 
// [14, 51]

// //---------Global Variables----------
// //inputs
// const arrInput = [200,17,15,39,51,14,32,28,100];
// //outpus
// let arrStats = [];

// //--------Sequence-------------------

// arrStats = getSmallestLargest(arrInput);
// console.log(arrStats);

//--------Functions------------------

function getSmallestLargest(arrIn){

    const MAXIMUM_LENGTH = 32768;
    const arrOut = [0,0];

     //Math.min and Math.max methods have a limitation of arguments
     //size of array matters

    if(arrIn.length <= MAXIMUM_LENGTH){         //if the array is small 

        arrOut[0] =  Math.min(...arrIn);
        arrOut[1] =  Math.max(...arrIn);

    }else{                                      //if the array is big

        arrOut[0] = arrIn[0];// min comparison setup

        for( const val of arrIn ){
            
            if( val < arrOut[0] ){

                arrOut[0] = val;
            }

            if( val > arrOut[1] ){

                arrOut[1] = val;
            }
        }
    }

    return arrOut;
}