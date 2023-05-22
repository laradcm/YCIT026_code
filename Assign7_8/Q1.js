// Q1. Frequency Counter - sameFrequency

// Write a function called sameFrequency.
//  Given two positive integers, 
//  find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:


console.log(sameFrequency(1822,2281)); // true

console.log(sameFrequency(34,14)); // false

console.log(sameFrequency(3589578, 5879385)); // true

console.log(sameFrequency(22,222)); // false

// ------

function sameFrequency(num1, num2) {

    let result = true;
    let freqCount1 = {};
    let freqCount2 = {};
    let n1 = num1.toString();
    let n2 = num2.toString();

    if (n1.length === n2.length) {

        for (let i = 0; i < n1.length; i++) {//O(n)

        freqCount1[n1[i]]? freqCount1[n1[i]]++ : freqCount1[n1[i]] = 1;
        freqCount2[n2[i]]? freqCount2[n2[i]]++ : freqCount2[n2[i]] = 1;
            
        }
        
        if (freqCount1.length == freqCount2.length) {
            
            for (const key in freqCount1) {//O(n)

                if (freqCount1[key] != freqCount2[key]) {

                    result = false
                    break;
                }
            }

        }

    }else{
        
        result= false;
    } 

    return result
    //Time complexity O(n)
    //Space Complexity O(1)
  
}