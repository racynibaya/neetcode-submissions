class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(nums.length * 2)
        const len = nums.length

        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i]
            ans.fill(nums[i], len + i)
        }

        return ans
    }
}
