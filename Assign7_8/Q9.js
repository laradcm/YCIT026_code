

var containsDuplicate = function(nums) {

    let setUniqueNums = new Set(nums);//O(n) for [numbers] according to ECMA specs
    
    return nums.length != setUniqueNums.size; //O(n)

    //Time complexity O(n)
    //Space Complexity O(1)
}

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));