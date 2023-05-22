
var findDuplicates = function(nums) {
    
    const result = [];
    const freqCnt = {};
    
    for(i = 0; i < nums.length; i++){
        
        freqCnt[nums[i]]?freqCnt[nums[i]]++ : freqCnt[nums[i]] = 1;
        
        if(freqCnt[nums[i]] > 1){
        
            result.push(nums[i]);
        }
        
    }

    return result;
    //Time complexity O(n)
    //Space Complexity O(n)
    
};

// console.log([4,3,2,7,8,2,3,1]);
// console.log([1,1,2]);
// console.log([1]);