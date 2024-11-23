// Create a function named isPalindrome that takes a 
// single string argument and returns true if the string is a palindrome 
// (reads the same backward as forward) and false otherwise. 
// Ignore case and remove non-alphanumeric characters before checking.

function isPalindrome(inputStr) {
    // Normalize the string: convert to string and remove any non-alphanumeric characters
    const cleanedStr = inputStr.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < cleanedStr.length / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length-1-i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));