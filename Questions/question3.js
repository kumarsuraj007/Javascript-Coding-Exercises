// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). Function to check if  string is a palindrome.

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start ++;
        end --;
    }
    return true
}

console.log(isPalindrome('dalad'))