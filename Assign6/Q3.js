// console.log(palindromeIndex("abbca"));

function palindromeIndex(s) {
    
    let index = -1;
    
    const isPalindrome = (str)=>{
        
        let i = 0;
        while (i < ((str.length-1)-i) ){
            
            if(str[i] !== str[str.length-1-i] ){
                
                return false;
            }
            i++;
        }
        return true;
    }
    
    const checkPaliIndex = (str, index)=>{
         
        str = str.slice(0,index) + str.slice(index + 1 , str.length);

        if(isPalindrome(str)){

           return true;
        }
        return false;
    }

    if(!isPalindrome(s)){

        for(let i = 0; i < s.length/2; i++){

            if(s[i]!=s[s.length-1-i]){

                if (checkPaliIndex(s,i)) {
                    index = i;
                    break;
                }

                if (checkPaliIndex(s,s.length-1-i)) {
                    index = s.length-1-i;
                    break;
                }

            }
            
        }
    }
    
    return index;
    //O(n2) time complexity
    //O(1) space complexity

}