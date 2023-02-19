let num = 10;

function fibo(n) {
    if (n < 2) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

// console.log(fibo(num));

let n1 = 0; let n2 = 1; let n3 = 0;


function nFibo(n) {
    if (n > 0) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        console.log(n2)
        return nFibo(n - 1);
    }
}

console.log(n1);
console.log(n2);
nFibo(num - 2);