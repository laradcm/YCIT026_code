// Q2. Check if a number is a palindrome or not
// Sample Input
// 151
// Output
// true
// Sample Input
// 22
// Output
// true
// Sample Input
// -22
// Output
// false
// Sample Input
// 75257
// Output
// true
// Sample Input
// 9257823
// Output
// false

// console.log(isNumPalindrome(-72327));

function isNumPalindrome(num){

    let result = true;
    let i = 0;
    const numStr = String(num);
    
    while (i < ((numStr.length-1)-i) ){
        
        if(numStr[i] !== numStr[numStr.length-1-i] ){//when odd, skip 1 element
            
            result = false;
            break;
        }

        i++;
    }
    return result;
    // O(n) time complexity
    // O(1) space complexity
}


// var isPalindrome = function(x) {
    
//     if (x < 0) {
//         return false;
//     }

//     let number = x;
    
//     let reverse = 0;
//     while (number > 0) {
//         reverse = reverse * 10 + number % 10;
//         number = parseInt(number / 10);
//     }
//     return x === reverse;
// };

console.log(isPalindrome('-22'));
