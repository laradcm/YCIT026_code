

var containsDuplicate = function(nums) {

    let freqCounter = {};
    
    for(let i = 0; i< nums.length; i++){
        
        freqCounter[nums[i]]?freqCounter[nums[i]]++: freqCounter[nums[i]] = 1;
        
        if(freqCounter[nums[i]]>1){
            return true
        }        
    }
    return false;
    //Time complexity O(n)
    //Space Complexity O(1)
};


// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));