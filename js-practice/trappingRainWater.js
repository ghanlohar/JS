// https://leetcode.com/problems/trapping-rain-water/description/?envType=company&envId=goldman-sachs&favoriteSlug=goldman-sachs-thirty-days
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    leftMax = 0;
    leftMaxArr = [];
    rightMax = height[height.length -1];
    rightMaxArr = [];

    for(let i = 0, j= height.length -1; i < height.length;i++,j--) {
        if(height[i] > leftMax ) {
            leftMax = height[i];
        }
        if(height[j] > rightMax ) {
            rightMax = height[j];
        }
        leftMaxArr[i] = leftMax;
        rightMaxArr[j] = rightMax;
    }

    let trap = 0;
    for(let i=0; i < height.length; i++) {
        let minHeight = Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
        trap = trap + minHeight;
    }
    return trap;
};

