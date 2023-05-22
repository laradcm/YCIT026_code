



var targetIndices = function(nums, target) {

    const result = [];
    const sortedNums = Array.from(nums);
    sortedNums.sort((a ,b) => a - b);

    let arrWindow = 0; 
    let resultIndex = sortedNums.slice(arrWindow).indexOf(target);

    while(resultIndex != -1 ){

        resultIndex += arrWindow;

        result.push(resultIndex);

        arrWindow = resultIndex + 1;
        resultIndex = sortedNums.slice(arrWindow).indexOf(target);
    }
    
    return result;
    //O(n^2)
};

// console.log(targetIndices([1,2,5,2,3],2));
// console.log(targetIndices([1,2,5,2,3],3));
// console.log(targetIndices([1,2,5,2,3],5));
