

var sortPeople = function(names, heights) {
    
    const namesHeightDesc = Array(names.length);
    const heightDesc = [...heights];//shallow clone
 
    heightDesc.sort((a,b)=> b - a);

    for (let i = 0; i < names.length; i++) {

        namesHeightDesc[heightDesc.indexOf(heights[i])] = names[i];
        
    }

    return namesHeightDesc;
    //O(n^2)

};

// console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));
// console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]));