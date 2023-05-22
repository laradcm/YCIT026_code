



var smallerNumbersThanCurrent = function(nums) {

    const result = [];
    const sortedArr = Array.from(nums);// shallow clone
    sortedArr.sort((a,b)=> a - b);

    for (const num of nums) {

        result.push(sortedArr.indexOf(num));
        
    }

    return result;
    //O(n^2)
};

// console.log(smallerNumbersThanCurrent([6,5,4,8]));
// console.log(smallerNumbersThanCurrent([7,7,7,7]));
