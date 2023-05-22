
var uniqueOccurrences = function(arr) {
        
    freqCnt = {};
    uCheck = {};

    for (const val of arr) {

        freqCnt[val]?freqCnt[val]++:freqCnt[val] = 1;
        
    }

    for (const key in freqCnt) {

        if (uCheck[freqCnt[key]]) {

            return false;

        }else{

            uCheck[freqCnt[key]] = 1;
        }
        
    }
    return true
    //Time complexity O(n)
    //Space Complexity O(1)
};

// console.log(uniqueOccurrences([1,2,2,1,1,3]));
// console.log(uniqueOccurrences([1,2]));
// console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));