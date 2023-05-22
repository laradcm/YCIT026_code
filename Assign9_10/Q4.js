


// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(2));
// console.log(factorial(1));
// console.log(factorial(0));


function factorial(n) {

    if (n == 1) {
        return n;
    }

    if (n == 0) {
        return 0;
    }

    return n * factorial(n - 1);
    //O(n)
}