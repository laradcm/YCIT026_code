// Q4. Overlapping ABBA Anish is given a string S and has been asked to determine if 
// the given string S contains two non-overlapping substrings "AB" and "BA" (the substrings can go in any order).

// As a friend of Anish, your task is to return true if the string S contains two non-overlapping substrings "AB" and "BA"
// (the substrings can go in any order) otherwise return false (without quotes).
// The string “ABBA” has two non-overlapping substrings “AB” and “BA” respectively. 
// So “True” will be printed(without quotes).

// Sample Input
// ABBA
// Output
// true
// Sample Input
// BAAB
// Output
// true
// Sample Input
// ABA
// Output
// false
// Sample Input
// ABHA
// Output
// false

// console.log(areStrNotOverlaped("ABHA"));

function areStrNotOverlaped(str){

    const AB = "AB";
    const BA = "BA";

    let indexAB = str.indexOf(AB);
    let indexBA = str.indexOf(BA);

    if (indexAB == -1 || indexAB == -1) {
        return false;
    }

    if (Math.abs(indexAB-indexBA)<2) {
        return false;
    }

    return true;   
    //O(1) time complexity
    //O(1) space complexity

}