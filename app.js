
function fib(memo, n) {
    if (memo[n]) {
        return memo[n];
    }

    memo[n-1] = fib(memo, n-1);
    memo[n-2] = fib(memo, n-2);

    return memo[n-1] + memo[n-2];
}

console.log(fib({0:1, 1:1},70));