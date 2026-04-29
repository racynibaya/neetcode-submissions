class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let maxCount = 0;

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i]

           if (val === 1) {
            count++
           } else {
            maxCount = maxCount > count ? maxCount : count;
            count = 0
           }

           if (nums[nums.length - 1] === 1 && count > maxCount) {
            maxCount = count
           }
        }

        console.log(count, maxCount)



        return maxCount;
    }
}
