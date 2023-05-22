
var myPow = function( x ,n ){

    if (n == 0) {
        return 1;
    }

    if (n < 0) {
        return 1 / myPow( x, -n );
    }

    const half = myPow( x , Math.floor( n / 2 ));

    return half * half * (n % 2 ? x : 1);
    //O(n)
}


// console.log(myPow(2, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2, -2));
// console.log(myPow(0.00001,-2000));