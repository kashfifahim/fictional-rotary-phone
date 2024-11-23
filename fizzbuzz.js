// Create a function named fizzBuzz that takes 
// a single number, n, as its argument. 
// The function should return an array of numbers 
// from 1 to n with the following exceptions:

// Replace multiples of 3 with "Fizz".
// Replace multiples of 5 with "Buzz".
// Replace multiples of both 3 and 5 with "FizzBuzz".

function fizzBuzz(n) {
    const result = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 == 0) {
            result.push("FizzBuzz");
        } else if (i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

const r = fizzBuzz(15);
console.log(r);