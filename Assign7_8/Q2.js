


// processData("abc bca");
// processData("abc aaa");

function processData(input) {

    let result = "Anagram";
    let freqCount1 = {};
    let freqCount2 = {};
    let [s1,s2] = input.trim().split(" ");

    if (s1.length === s2.length) {

        for (let i = 0; i < s1.length; i++) {

        freqCount1[s1[i]]? freqCount1[s1[i]]++ : freqCount1[s1[i]] = 1;
        freqCount2[s2[i]]? freqCount2[s2[i]]++ : freqCount2[s2[i]] = 1;
            
        }
        
        if (freqCount1.length == freqCount2.length) {
            
            for (const key in freqCount1) {

                if (freqCount1[key] != freqCount2[key]) {

                    result= "Not Anagram";
                    break;
                }
            }

        }

    }else{
        result= "Not Anagram";
    } 
    console.log(result);// hackerrant wanted the function to use a clg instead of return

    //Time complexity O(n)
    //Space Complexity O(n) if it used a return statement, not sure about clg
} 