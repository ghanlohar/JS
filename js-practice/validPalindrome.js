/**
 * 
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = s => {
    var res = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return res === res.split("").reverse().join("");
};
