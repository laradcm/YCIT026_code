


var isAnagram = function(s, t) {
    
    let result = true;
    let freqCount1 = {};
    let freqCount2 = {};

    if (s.length === t.length) {
        
        for (let i = 0; i < s.length; i++) {
            
            freqCount1[s[i]]? freqCount1[s[i]]++ : freqCount1[s[i]] = 1;
            freqCount2[t[i]]? freqCount2[t[i]]++ : freqCount2[t[i]] = 1;
        }

        if (freqCount1.length == freqCount2.length) {
            
            for (const key in freqCount1) {

                if (freqCount1[key] != freqCount2[key]) {

                    result = false
                    break;
                }
            }

        }else{

            result = false;
        }

    }else{

        result = false;
    } 

    return result
    //Time complexity O(n)
    //Space Complexity O(1)
    
};

// console.log(isAnagram("anagrama","nagaram"));
// console.log(isAnagram("rat","car"));