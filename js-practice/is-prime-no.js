/*
const isPrime = (num) => {
    if(num < 10) {
        return [2, 3, 5, 7].includes(num);
    }
    else {
        debugger
        const val = [2, 3, 5, 7].some(i => {
            let x = (num % i);
            debugger;
            return !x;
        })
        return !val;
    }
};
*/

const isPrime = (num) => num < 10 ? [2, 3, 5, 7].includes(num) : ![2, 3, 5, 7].some(i => !(num % i));
