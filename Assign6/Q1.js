// Q1.Palindrome Check. A palindrome is a word which reads the same backward or forward. 'abcba' is a palindrome.
// in other words a phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Write a function that detects if a string is a palindrome.

// Sample Input:   "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Sample Input: race a car
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Sample Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
// Sample Input
// Madam
// Output
// true
// Sample Input
// Car
// Output
// false
// Sample Input
// ABCba
// Output
// true
// Sample Input
// 1ABCba1
// Output
// true

console.log(checkIfPalindrome("carac"));


function checkIfPalindrome(sentence){

    const ruleAlphaNum = /[a-z0-9]/g;
    const arrSentence = sentence.toLowerCase().match(ruleAlphaNum);//O(n regex)
    return isArrPalindrome(arrSentence);
    //Time complexity O(n regex)
    // O(1) space complexity

}

function isArrPalindrome(arr){

    let result = true;
    let i = 0;
    
    while (i < ((arr.length-1)-i) ){
        
        if(arr[i] !== arr[arr.length-1-i] ){
            
            result = false;
            break;
        }

        i++;
    }
    return result;

}
