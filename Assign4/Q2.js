// Q2. Jason is studying in the second grade of primary school and is just learning to add numbers. 
// The class teacher writes the sum of a series of numbers on the board and the students must 
// calculate the sum of the desired numbers. 
// To make it easier, the numbers to be added are only one, two and three.
// But this is not enough and students can only do the addition when the numbers are arranged in
//  non-descending order (i.e. first ones then twos and then threes).
// you have to read the expression written by the teacher on the board as input and generate
//  the explained expression in the output so that Jason and the other students can calculate it.

// Sample Input 

// 1+1+3+1+3+2+3

// Output

// 1+1+1+2+3+3+3

const ascedingSum = (strSum)=>{

    const arrSum = strSum.split("+");//O(n)
    arrSum.sort((a,b)=>a-b);//O(n2)
    strSum = arrSum.join("+");//O(n)

    return strSum;
    //final time complexity     O(n2)
    //final space complexity    O(n)
}

console.log(ascedingSum("1+1+3+1+3+2+3"));