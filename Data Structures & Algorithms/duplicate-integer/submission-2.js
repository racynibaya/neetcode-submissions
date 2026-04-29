class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const keys = {}

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]
            if (!keys[value]) {
                keys[value] = true
            } else {
                return true
            }

            console.log(nums[i])
        }


        console.log(keys)
        return false


    }
}
