// Q1.Jason has just learned how to work with Strings. To start working with strings,
//  he has a relatively simple question in front of him, but he needs your help to be able to do it. 
//  Jason must write a program to read a string from the input and apply the following changes to it.

// 1- Delete all the vowels.

// 2- Print a dot before each silent letter.

// 3- Write all the remaining silent letters in lowercase.

// (vowels are aeiou)
// Sample Input 
// aBAcAba
// Output
// .b.c.b

console.log(stringTransform("aBAcAb  .a. .$"));

function stringTransform(stringIn){
    
    //eliminate spaces and special characters
    stringIn = stringIn.replace(/\W/g,"");//O(n Regex)

    stringIn = stringIn.toLowerCase();//O(n Regex)
    stringIn = stringIn.replace( /[aeiou]/g , "" );//O(n Regex)
    stringIn = stringIn.replace(/(.)/g, "." + "$1");//O(n Regex)

    return stringIn
    //final time complexity     O(n Regex)
    //final space complexity    O(n)
}