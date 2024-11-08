//N to 1 prime nos using generator functions

const isPrime = (num) => num < 10 ? [2, 3, 5, 7].includes(num) : ![2, 3, 5, 7].some(i => !(num % i));

function* Nto1PrimeNoUsingGenerators (n) {
    for (let i = n; i > 1; i--) {
        if(isPrime(i)) {
            yield i;
        }
    }
}
