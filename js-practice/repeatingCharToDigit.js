const repeatingCharToDigit = (s) => {
    let rs = "";
    let currentVal = s[0];
    let charCount = 1;
    for(let i = 1; i < s.length; i++) {
        if(currentVal === s[i]) {
            charCount++
        } else {
            rs += currentVal + charCount;
            currentVal = s[i];
            charCount = 1;
        }
    }
    return rs += currentVal + charCount;
}


//https://leetcode.com/problems/trapping-rain-water/description/
