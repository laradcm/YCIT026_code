// Q2. Recursion - reverse
// Write a recursive function called reverse which accepts a string and returns
//  a new string in reverse.

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
console.log(reverse('')); // ''
console.log(reverse('a')); // 'a'

function reverse(str){
    
    if (str.length <= 1) {
        return str;
    }

    const lastChar = str[str.length-1]; 
    const smallerString = str.slice(0,str.length-1);
 
    return lastChar + reverse(smallerString);
    //O(n)
}