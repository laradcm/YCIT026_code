// Q6.Jason is very upset that when people write a word on the Internet,
// they use both uppercase and lowercase letters. For this reason, 
// he decided to write a browser that would write words that have both lowercase and uppercase letters in a new way,
// in such a way that if a word has more uppercase letters than the number of lowercase letters,
// it will write the whole word in uppercase letters otherwise. This form writes the whole word in small letters.


// Sample Input 
// CONGraTUlatION
// Output
// CONGRATULATION
// Sample Input
// DOCument
// Output 
// document
// Sample Input
// strING
// Output 
// string

console.log(majorityCaseCoversion("DOCument"));


function majorityCaseCoversion(strBrowser){

    const ruleIsUpper = /[A-Z]/g;

    const arrMatch = strBrowser.match(ruleIsUpper);//O(n Regex)

    if(arrMatch.length > (strBrowser.length / 2) ){

        strBrowser = strBrowser.toUpperCase();//O(n)

    }else{

        strBrowser = strBrowser.toLowerCase();//O(n)
    } 

    return strBrowser;
    //final time complexity     //O(n Regex)
    //final space complexity    O(n)
}