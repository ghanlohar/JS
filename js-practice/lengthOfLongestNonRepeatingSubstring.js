/**
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestNonRepeatingSubstring = function(s) {
    const setMap = new Set();
    let max = 0;
    let ind = 0;
    for(let i = 0; i<s.length; i++) {
        while(setMap.has(s[i])) {
            setMap.delete(s[ind]);
            ind++
        }
        setMap.add(s[i]);
        max = Math.max(max, setMap.size);
    }
    return max;
};

lengthOfLongestNonRepeatingSubstring("abcabcbb");
lengthOfLongestNonRepeatingSubstring("bbbbb");
lengthOfLongestNonRepeatingSubstring("pwwkew");
