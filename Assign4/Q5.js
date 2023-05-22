// Q5. Write a program in Javascript to read a sentence and replace lowercase characters by uppercase and vice-versa.

// Sample Input 
// jASON
// Output
// Jason
// Sample Input 
// Ruby
// Output
// rUBY


console.log(invertCase("RuBy sAys Hi"));

function invertCase(strSentence){

   return strSentence.replace(/([A-Z]|[a-z])/g, replaceUpperLower)//O(n Regex)

    //final time complexity     O(n Regex)
    //final space complexity    O(n)
}

function replaceUpperLower(match){

    if(match == match.toUpperCase()){

        match = match.toLowerCase();

    }else{

        match = match.toUpperCase();
    }
    return match
}