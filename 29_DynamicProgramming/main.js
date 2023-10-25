
/**
 * normal recursive solution
 * @param {*} n 
 * @returns 
 */
function fib(n) {
    if (n <= 1) return n;
    else return fib(n - 1) + fib(n - 2);
};

/**
 * we use dynamic programming to have a
 * memoized solution
 * @param {*} n 
 * @param {*} memo 
 */
function fibDP(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fibDP(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    // console.log({memo});
    return res;
};

/**
 * Tabulation
 * - storing the result of a prev result in a table (typically an array)
 * - usually done using iteration
 * - better space complexity can be achieved using tabulation
 * @param {*} n 
 */
function fibT(n){
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    };
    return fibNums[n];
};

const num = 30;
console.log(fib(num));
console.log(fibDP(num));
console.log(fibT(num));