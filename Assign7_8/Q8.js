


var judgeSquareSum = function(c) {
    
    let result = false;
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    let sum = 0;

    if( b**2 == c ){

        result = true;

    }else{

        while(a <= b ){
        
            sum =  a**2 + b**2;
         
            if(sum < c){

               a++;
                   
             }
             else if(sum > c){

                b--; 
                 
             }else{

                 result = true;
                 break;
             }
                    
         }
    }
    return result;
    //Time complexity O(n)
    //Space Complexity O(1)
};


// console.log(judgeSquareSum(5));
// console.log(judgeSquareSum(3));
// console.log(judgeSquareSum(4));1