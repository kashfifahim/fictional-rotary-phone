// Create a function named findLongestWord that takes an array of strings as its argument. 
// The function should return the longest word in the array. 
// If there are multiple words with the same length, return the first one that appears.

function findLongestWord(str_array) {
    const lengthOfArray = str_array.length;
    let indexOfLongestWord = 0;
    let maxWordLength = 0;

    for (let i = 0; i < lengthOfArray; i++) {
        const word = str_array[i];
        const lengthOfWord = word.length;
        if (maxWordLength < lengthOfWord) {
            maxWordLength = lengthOfWord;
            indexOfLongestWord = i;
        }
    }
    return str_array[indexOfLongestWord];
}

input_array = ["dog", "elephant", "cat"];

const r = findLongestWord(input_array);
console.log(r);