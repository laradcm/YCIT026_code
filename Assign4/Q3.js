// Q3. Jason has just learned to type and access the internet.
// As soon as he entered the Internet, he decided to enter a chat room and say hello to everyone.
// Jason entered a word in the chat room.
// If it is possible to delete some of the letters of the word that Jason entered and the word "hello" remains at the end
// , it means that Jason was able to say hello, otherwise, no.

// Sample Input //checking the order of letters
// ahhellllloou
// Output 
// Yes
// ---
// Sample Input 
// hlelo
// Output
// NO


const isThereHello = (msg)=>{

    let result = "NO";

    const helloRule = /[hH]+[eE]+[lL]{2,}[oO]+/;

    if( helloRule.test(msg) ){ //O(n Regex)

        result = "Yes";
    }

    return result;
    //final time complexity     O(n Regex)
    //final space complexity    O(n)
}


console.log(isThereHello("ahhellllloou"));