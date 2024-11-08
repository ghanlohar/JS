/**
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestNo
nRepeatingSubstring = function(s) {
    const setMap = new Set();
    let m = 0;
    let ind = 0;
    for(let i = 0; i<s.length; i++) {
        while(setMap.has(s[i])) {
            setMap.delete(s[ind]);
            ind++
        }
        setMap.add(s[i]);
        m = Math.max(m, setMap.size);
    }
    return m;
};

lengthOfLongestNonRepeatingSubstring("abcabcbb");
lengthOfLongestNonRepeatingSubstring("bbbbb");
lengthOfLongestNonRepeatingSubstring("pwwkew");
