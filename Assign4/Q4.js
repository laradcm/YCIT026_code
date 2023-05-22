// Q.4 Write a program in Javascript to check whether a letter is uppercase or not.

// Sample Input 
// p
// Output
// false
// Sample Input 
// H
// Output
// true
// Input:  9
// Output: 9 is not an alphabetic character
// Input:  ?
// Output: ? is not an alphabetic character


const isUpper = (letter)=>{

    let result = false;

    const ruleIsLower = /^[a-z]$/;
    const ruleIsUpper  = /^[A-Z]$/;

    if(ruleIsUpper.test(letter)){//O(n Regex)

        result = true;

    }else if(ruleIsLower.test(letter)){//O(n Regex)

        result = false;

    }else{
        result = letter + " is not an alphabetic character or it's not a single letter";
    }

    return result;
    //final time complexity     //O(n Regex)
    //final space complexity    O(n)
}

console.log(isUpper("1AB"));
console.log(isUpper("1"));
console.log(isUpper("AB1"));
console.log(isUpper("A"));
console.log(isUpper("b"));