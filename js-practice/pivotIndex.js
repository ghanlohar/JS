/*
* https://leetcode.com/problems/find-pivot-index/description/
*
*/


const pivotIndex = (nums) => {
    const total = nums.reduce((s, e)=>
        s += e, 0);
    let pivotIndex = -1;
    let leftSum = 0;
    let rightSum = total;
    for(let i=0; i < nums.length; i++) {
        rightSum = total - leftSum - nums[i];
        if(leftSum === rightSum) {
            pivotIndex = i;
            break;
        }
        leftSum = leftSum + nums[i];
    } 
    return pivotIndex;
}